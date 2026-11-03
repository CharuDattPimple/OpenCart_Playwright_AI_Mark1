// Loads environment variables from profile files.
import dotenv from 'dotenv';
// Builds an absolute path to the selected profile file.
import path from 'node:path';

// Restricts supported profile names to the environments maintained by this framework.
const supportedEnvironments = ['dev', 'qa', 'uat'] as const;
// Derives the TypeScript union type from the supported environment list.
type AppEnvironment = (typeof supportedEnvironments)[number];

// Treats CI as enabled when its environment variable is set to "1" or "true".
const isCI = ['1', 'true'].includes((process.env.CI ?? '').toLowerCase());
// Uses APP_ENV when supplied; defaults to QA locally, but requires an explicit value in CI.
const selectedEnvironment = (
    process.env.APP_ENV ?? (isCI ? '' : 'qa')
).trim().toLowerCase();

// Stops startup early if the requested environment is missing or unsupported.
if (!supportedEnvironments.includes(selectedEnvironment as AppEnvironment)) {
    throw new Error(
        `APP_ENV must be one of ${supportedEnvironments.join(', ')}.`
    );
}

// Exposes the validated environment name to other framework modules.
export const appEnvironment = selectedEnvironment as AppEnvironment;

// Locally, load the selected profile; in CI, values are expected to be injected by the CI system.
if (!isCI) {
    // Resolves the selected profile file relative to the repository's current working directory.
    const profilePath = path.resolve(
        process.cwd(),
        'config',
        'environments',
        `.env.${appEnvironment}`
    );

    // Reads the profile file and adds its variables to process.env.
    const result = dotenv.config({ path: profilePath });

    // Fails with the profile path and loader error if the file cannot be read.
    if (result.error) {
        throw new Error(
            `Unable to load ${profilePath}: ${result.error.message}`
        );
    }

    // Confirms the profile identifies itself as the environment selected by APP_ENV.
    const profileEnvironment = result.parsed?.APP_ENV?.trim().toLowerCase();
    if (profileEnvironment !== appEnvironment) {
        throw new Error(
            `${profilePath} must declare APP_ENV=${appEnvironment}.`
        );
    }
}

// Normalizes APP_ENV so all consumers see the same validated environment name.
process.env.APP_ENV = appEnvironment;

// Returns a required variable after rejecting missing values and template placeholders.
export function getRequiredEnv(name: string): string {
    const value = process.env[name]?.trim();

    // Detects absent values and placeholders such as "<your-url>" before tests use them.
    if (!value || (value.startsWith('<') && value.endsWith('>'))) {
        throw new Error(
            `Required environment variable ${name} is missing or still a placeholder.`
        );
    }

    return value;
}

// Returns a required variable only if it can be parsed as an absolute URL.
export function getRequiredUrl(name: string): string {
    // Reuses required-variable checks before URL parsing.
    const value = getRequiredEnv(name);

    try {
        // URL requires an absolute URL, including its scheme (for example, https://).
        new URL(value);
    } catch {
        throw new Error(`${name} must be a valid absolute URL.`);
    }

    return value;
}