stage('Run Playwright tests') {
  steps {
    script {
      def targetEnv = params.APP_ENV
      def needsDatabase = params.TEST_SUITE in ['all', 'uidb']

      env.TARGET_APP_ENV = targetEnv
      env.TARGET_TEST_SUITE = params.TEST_SUITE
      env.NEEDS_DATABASE = needsDatabase ? 'true' : 'false'

      // These credentials are required by tests loaded during Playwright discovery.
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
        )
      ]

      if (needsDatabase) {
        bindings.add(usernamePassword(
          credentialsId: "opencart-${targetEnv}-admin",
          usernameVariable: 'ADMIN_USERNAME',
          passwordVariable: 'ADMIN_PASSWORD'
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

          # Loads non-secret configuration from the selected checked-in template,
          # then merges it with credentials bound above.
          . (Join-Path $env:WORKSPACE 'scripts\prepare-ci-env.ps1')

          if ($env:TARGET_TEST_SUITE -eq 'all') {
            # Overrides the config's default @master filter to run all discovered tests.
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