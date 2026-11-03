pipeline {
  agent any

  options {
    timestamps()
    skipDefaultCheckout(true)
  }

  parameters {
    choice(name: 'APP_ENV', choices: ['dev', 'qa', 'uat'], description: 'Target environment')
    choice(
      name: 'TEST_SUITE',
      choices: ['all', 'master', 'api', 'web', 'e2e', 'datadriven', 'sanity', 'regression'],
      description: 'Select the suite to run'
    )
    string(name: 'EMAIL_TO', defaultValue: '', description: 'Optional email recipient')
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
          def profileCredentialIds = [
            dev: 'opencart-dev-env',
            qa : 'opencart-qa-env',
            uat: 'opencart-uat-env'
          ]

          env.PROFILE_CREDENTIAL_ID = profileCredentialIds[params.APP_ENV]
          env.TARGET_ENV = params.APP_ENV
          env.SELECTED_SUITE = params.TEST_SUITE
        }

        withCredentials([
          file(
            credentialsId: env.PROFILE_CREDENTIAL_ID,
            variable: 'ENV_PROFILE_FILE'
          )
        ]) {
          powershell '''
            $profileJson = node -e "const fs=require('fs'); const dotenv=require('dotenv'); process.stdout.write(JSON.stringify(dotenv.parse(fs.readFileSync(process.env.ENV_PROFILE_FILE))))"
            if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

            $profile = $profileJson | ConvertFrom-Json
            foreach ($entry in $profile.PSObject.Properties) {
              Set-Item -Path "Env:$($entry.Name)" -Value ([string]$entry.Value)
            }

            if ($env:APP_ENV -ne $env:TARGET_ENV) {
              throw "Selected Jenkins environment does not match APP_ENV in the credential file."
            }

            $env:CI = 'true'

            if ($env:SELECTED_SUITE -eq 'all') {
              npx playwright test --project=chromium
            } else {
              $scriptName = "test:$($env:SELECTED_SUITE)"
              npm run $scriptName -- --project=chromium
            }

            if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
          '''
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

      junit testResults: 'reports/results.xml', allowEmptyResults: true

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
            subject: "Playwright ${params.APP_ENV} ${params.TEST_SUITE}: ${currentBuild.currentResult} — ${env.JOB_NAME} #${env.BUILD_NUMBER}",
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