pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
    skipDefaultCheckout(true)
  }

  parameters {
    choice(
      name: 'APP_ENV',
      choices: ['dev', 'qa', 'uat'],
      description: 'Target environment'
    )
    choice(
      name: 'TEST_SUITE',
      choices: ['all', 'master', 'api', 'web', 'e2e', 'datadriven', 'uidb'],
      description: 'Select the suite. all includes every test; uidb runs database tests.'
    )
    string(
      name: 'EMAIL_TO',
      defaultValue: '',
      description: 'Optional email recipient'
    )
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies and Chromium') {
      steps {
        powershell '''
          npm ci
          if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

          npx playwright install chromium
          if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
        '''
      }
    }

    stage('Run Playwright tests') {
      steps {
        script {
          def targetEnv = params.APP_ENV
          def needsDatabase = params.TEST_SUITE in ['all', 'uidb']

          env.TARGET_APP_ENV = targetEnv
          env.TARGET_TEST_SUITE = params.TEST_SUITE
          env.NEEDS_DATABASE = needsDatabase ? 'true' : 'false'

          def bindings = [
            usernamePassword(
              credentialsId: "opencart-${targetEnv}-env",
              usernameVariable: 'APP_EMAIL',
              passwordVariable: 'APP_PASSWORD'
            ),
            usernamePassword(
              credentialsId: "opencart-${targetEnv}-api",
              usernameVariable: 'API_USERNAME',
              passwordVariable: 'API_PASSWORD'
            ),
            string(
              credentialsId: "opencart-${targetEnv}-web-url",
              variable: 'WEB_APP_URL'
            ),
            string(
              credentialsId: "opencart-${targetEnv}-api-url",
              variable: 'API_BASE_URL'
            )
          ]

          if (needsDatabase) {
            bindings.add(string(
              credentialsId: "opencart-${targetEnv}-admin-url",
              variable: 'ADMIN_APP_URL'
            ))
            bindings.add(usernamePassword(
              credentialsId: "opencart-${targetEnv}-admin",
              usernameVariable: 'ADMIN_USERNAME',
              passwordVariable: 'ADMIN_PASSWORD'
            ))
            bindings.add(string(
              credentialsId: "opencart-${targetEnv}-db-host",
              variable: 'DB_HOST'
            ))
            bindings.add(string(
              credentialsId: "opencart-${targetEnv}-db-port",
              variable: 'DB_PORT'
            ))
            bindings.add(string(
              credentialsId: "opencart-${targetEnv}-db-name",
              variable: 'DB_NAME'
            ))
            bindings.add(usernamePassword(
              credentialsId: "opencart-${targetEnv}-db",
              usernameVariable: 'DB_USER',
              passwordVariable: 'DB_PASSWORD'
            ))
          }

          withCredentials(bindings) {
            powershell '''
              $ErrorActionPreference = 'Stop'

              $requiredNames = @(
                'WEB_APP_URL',
                'API_BASE_URL',
                'APP_EMAIL',
                'APP_PASSWORD',
                'API_USERNAME',
                'API_PASSWORD'
              )

              if ($env:NEEDS_DATABASE -eq 'true') {
                $requiredNames += @(
                  'ADMIN_APP_URL',
                  'ADMIN_USERNAME',
                  'ADMIN_PASSWORD',
                  'DB_HOST',
                  'DB_PORT',
                  'DB_USER',
                  'DB_PASSWORD',
                  'DB_NAME'
                )
              }

              foreach ($name in $requiredNames) {
                $value = [string](Get-Item -Path "Env:$name" -ErrorAction SilentlyContinue).Value
                if ([string]::IsNullOrWhiteSpace($value) -or $value -match '^<.*>$') {
                  throw "Required Jenkins setting $name is missing or is still a placeholder."
                }
              }

              if ($env:NEEDS_DATABASE -eq 'true' -and $env:DB_PORT -notmatch '^\\d+$') {
                throw 'DB_PORT must contain a numeric port.'
              }

              $env:APP_ENV = $env:TARGET_APP_ENV
              $env:TEST_ENV = $env:TARGET_APP_ENV
              $env:CI = '1'

              if ($env:TARGET_TEST_SUITE -eq 'all') {
                # Overrides the config's @master filter so this really runs all tests.
                npx playwright test --grep '.*' --project=chromium
              } elseif ($env:TARGET_TEST_SUITE -eq 'uidb') {
                npx playwright test --grep '@uidb' --project=chromium
              } else {
                $scriptName = "test:$($env:TARGET_TEST_SUITE)"
                npm run $scriptName -- --project=chromium
              }

              if ($LASTEXITCODE -ne 0) {
                exit $LASTEXITCODE
              }
            '''
          }
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts(
        artifacts: 'reports/**,custom-report/**,allure-results/**,test-results/**',
        allowEmptyArchive: true
      )

      junit(
        testResults: 'reports/results.xml',
        allowEmptyResults: true
      )

      allure(
        includeProperties: false,
        results: [[path: 'allure-results']]
      )

      publishHTML([
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'reports',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report'
      ])

      script {
        if (params.EMAIL_TO?.trim()) {
          emailext(
            to: params.EMAIL_TO,
            subject: "Playwright ${params.APP_ENV} ${params.TEST_SUITE}: ${currentBuild.currentResult} - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: """<p>Environment: ${params.APP_ENV}</p>
                     <p>Suite: ${params.TEST_SUITE}</p>
                     <p>Result: ${currentBuild.currentResult}</p>
                     <p><a href="${env.BUILD_URL}">Open Jenkins build and reports</a></p>""",
            mimeType: 'text/html'
          )
        }
      }
    }
  }
}