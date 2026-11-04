$ErrorActionPreference = 'Stop'

$profilePath = Join-Path $env:WORKSPACE (
    "config\environments\.env.$($env:TARGET_APP_ENV).example"
)

if (-not (Test-Path -LiteralPath $profilePath)) {
    throw "Environment template not found: $profilePath"
}

# Read the simple KEY=value syntax used by the checked-in environment templates.
$template = @{}
$lineNumber = 0

foreach ($line in [System.IO.File]::ReadLines($profilePath)) {
    $lineNumber++
    $trimmedLine = $line.Trim()

    if ([string]::IsNullOrWhiteSpace($trimmedLine) -or $trimmedLine.StartsWith('#')) {
        continue
    }

    if ($trimmedLine -notmatch '^(?<name>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?<value>.*)$') {
        throw "Invalid environment template syntax at line $lineNumber."
    }

    $name = $Matches['name']
    $value = $Matches['value'].Trim()

    if ($value.Length -ge 2 -and
        (($value.StartsWith('"') -and $value.EndsWith('"')) -or
         ($value.StartsWith("'") -and $value.EndsWith("'")))) {
        $value = $value.Substring(1, $value.Length - 2)
    } elseif ($value.StartsWith('"') -or $value.StartsWith("'") -or
        $value.EndsWith('"') -or $value.EndsWith("'")) {
        throw "Unmatched quote in environment template at line $lineNumber."
    }

    $template[$name] = $value
}

if ($template.APP_ENV -ne $env:TARGET_APP_ENV) {
    throw "Template APP_ENV does not match the selected environment."
}

# Copy only non-secret settings from the checked-in template.
$values = [ordered]@{}
$templateKeys = @(
    'APP_ENV',
    'WEB_APP_URL',
    'API_BASE_URL',
    'ADMIN_APP_URL',
    'DB_HOST',
    'DB_PORT',
    'DB_NAME'
)

foreach ($name in $templateKeys) {
    if (-not $template.ContainsKey($name)) {
        $values[$name] = ''
    } else {
        $values[$name] = [string]$template[$name]
    }
}

# Add secrets supplied by Jenkins Credentials Binding.
$values.TEST_ENV = $env:TARGET_APP_ENV
$values.APP_EMAIL = $env:APP_EMAIL
$values.APP_PASSWORD = $env:APP_PASSWORD
$values.API_USERNAME = $env:API_USERNAME
$values.API_PASSWORD = $env:API_PASSWORD
$values.ADMIN_USERNAME = $env:ADMIN_USERNAME
$values.ADMIN_PASSWORD = $env:ADMIN_PASSWORD
$values.DB_USER = $env:DB_USER
$values.DB_PASSWORD = $env:DB_PASSWORD

# Validate settings needed by all runs. API settings are required because API test files
# read them during Playwright test discovery, even when another suite is selected.
$requiredNames = @(
    'APP_ENV',
    'WEB_APP_URL',
    'API_BASE_URL',
    'APP_EMAIL',
    'APP_PASSWORD',
    'API_USERNAME',
    'API_PASSWORD'
)

# The all and uidb suites include tests that use the admin site and database.
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

# In Docker, localhost resolves to the test container rather than the Jenkins host or database service.
if (
    $env:CREATE_COMPOSE_ENV_FILE -eq 'true' -and
    $env:NEEDS_DATABASE -eq 'true' -and
    [string]$values.DB_HOST -match '^(localhost|127(?:\.\d{1,3}){3}|::1)$'
) {
    throw 'DB_HOST cannot be localhost for Docker database suites; set it to a host or service reachable from the container.'
}

foreach ($name in $requiredNames) {
    $value = [string]$values[$name]

    if ([string]::IsNullOrWhiteSpace($value) -or $value -match '^<.*>$') {
        throw "Required setting $name is missing or still a template placeholder."
    }

    if ($value.Contains("`r") -or $value.Contains("`n")) {
        throw "Setting $name must not contain newline characters."
    }
}

if ($env:NEEDS_DATABASE -eq 'true' -and [string]$values.DB_PORT -notmatch '^\d+$') {
    throw 'DB_PORT must be a numeric port.'
}

# Export the merged values to this PowerShell process. Playwright inherits them.
foreach ($name in $values.Keys) {
    Set-Item -Path "Env:$name" -Value ([string]$values[$name])
}

$env:CI = '1'

# Docker runs need an env file for Compose interpolation. Keep it outside the workspace.
if ($env:CREATE_COMPOSE_ENV_FILE -eq 'true') {
    function ConvertTo-ComposeEnvValue([string] $value) {
        if ($value.Contains("`r") -or $value.Contains("`n")) {
            throw 'Newlines are not supported in Compose environment values.'
        }

        $quote = [string][char]39
        $escapedQuote = ([string][char]92) + [string][char]39
        return $quote + $value.Replace($quote, $escapedQuote) + $quote
    }

    $runtimeEnvFile = Join-Path $env:TEMP (
        'opencart-' + [guid]::NewGuid().ToString('N') + '.env'
    )

    $lines = foreach ($name in $values.Keys) {
        "$name=$(ConvertTo-ComposeEnvValue ([string]$values[$name]))"
    }

    [System.IO.File]::WriteAllLines(
        $runtimeEnvFile,
        $lines,
        [System.Text.UTF8Encoding]::new($false)
    )

    # Only the path is exposed; do not print the file contents.
    $env:CI_COMPOSE_ENV_FILE = $runtimeEnvFile
}