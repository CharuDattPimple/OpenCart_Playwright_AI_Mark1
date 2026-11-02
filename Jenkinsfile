// Jenkins pipeline for running Playwright tests in Docker on a Windows agent.

pipeline {
  agent any

  options {
    timestamps()
  }

  parameters {
    choice(
      name: 'TEST_SUITE',
      choices: ['all', 'master', 'sanity', 'regression', 'api', 'web', 'e2e', 'datadriven'],
      description: 'Select the test suite to run in Docker'
    )
  }

  environment {
    NODE_ENV = 'test'
    CI = '1'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Check Docker') {
      steps {
        powershell '''
          docker version
          if ($LASTEXITCODE -ne 0) {
            exit $LASTEXITCODE
          }

          docker compose version
          if ($LASTEXITCODE -ne 0) {
            exit $LASTEXITCODE
          }
        '''
      }
    }

    stage('Build and Run Playwright Tests in Docker') {
      steps {
        script {
          // The suite values are restricted to the choices above.
          env.CONTAINER_TEST_SUITE = params.TEST_SUITE
        }

        withCredentials([
          usernamePassword(
            credentialsId: 'opencart-test-account',
            usernameVariable: 'APP_EMAIL',
            passwordVariable: 'APP_PASSWORD'
          )
        ]) {
          powershell '''
            @(
              "WEB_APP_URL=https://awesomeqa.com/ui/"
              "APP_URL=https://awesomeqa.com/ui/"
              "APP_EMAIL=$env:APP_EMAIL"
              "APP_PASSWORD=$env:APP_PASSWORD"
            ) | Set-Content -Path .env -Encoding ascii

            docker compose build playwright-tests
            if ($LASTEXITCODE -ne 0) {
              exit $LASTEXITCODE
            }

            docker compose run --rm playwright-tests $env:CONTAINER_TEST_SUITE --project=chromium
            if ($LASTEXITCODE -ne 0) {
              exit $LASTEXITCODE
            }
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

      publishHTML([
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'custom-report',
        reportFiles: '*.html',
        reportName: 'Custom Test Report'
      ])

      powershell '''
        if (Test-Path .env) {
          Remove-Item .env -Force
        }
      '''
    }

    success {
      powershell '''
        if (Test-Path allure-results) {
          Remove-Item -Recurse -Force allure-results
        }
      '''
    }
  }
}