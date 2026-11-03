// Imports Playwright's configuration helper and built-in browser device profiles.
import { defineConfig, devices } from "@playwright/test";

// Exports the configuration used by the Playwright test runner.
export default defineConfig({
  // Sets the maximum duration for an individual test to 30 seconds.
  timeout: 30 * 1000, //30000 ms(30 secs)
  // Tells Playwright where to discover test files.
  testDir: "./tests",
  // Allows independent tests to run concurrently where possible.
  fullyParallel: true,
  // Retries failed tests twice in CI and does not retry them locally.
  retries: process.env.CI ? 2 : 0,
  // Limits CI to one worker; locally, Playwright chooses the worker count.
  workers: process.env.CI ? 1 : undefined,
  // Configures the reporters that display and save test results.
  reporter: [
    // Prints test progress and results in the terminal.
    ["list"], // Detailed console output
    // Optional concise, one-line progress reporter.
    //['line'],                         // One-line progress output
    // Optional minimal dot-based progress reporter.
    //['dot'],                          // Minimal console output
    // Creates the HTML report without opening it automatically.
    ["html", { open: "never", outputFolder: "reports" }], // HTML Report
    // Optional JSON reporter; writes results to the specified file.
    //['json', { outputFile: 'reports/results.json' }], // JSON Report
    // Writes test results as JUnit XML for CI systems.
    ["junit", { outputFile: "reports/results.xml" }], // JUnit XML Report
    // Runs the project's custom reporter.
    ["./utils/CustomReporter.ts"], // Custom reporter
    // Writes Allure-compatible test result files.
    ["allure-playwright", { outputFolder: "allure-results" }], // Allure Report
  ],
  // Sets browser and context options shared by tests.
  use: {
    // Saves a trace when a test fails, for troubleshooting.
    trace: "retain-on-failure",
    // Saves a screenshot only when a test fails.
    screenshot: "only-on-failure",
    // Saves a video only when a test fails.
    video: "retain-on-failure",
    // Runs browsers without a visible UI, suitable for CI and Docker.
    headless: true,
    // Sets a consistent browser viewport size.
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    // Allows navigation to sites with invalid or self-signed HTTPS certificates.
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    // Grants tests access to geolocation in the browser context.
    permissions: ["geolocation"], // Set necessary permissions for geolocation-based tests
  },
  // By default, selects only tests whose title contains the @master tag.
  grep: /@master/,
  // Defines browser/device configurations in which tests can run.
  projects: [
    {
      // Names this browser project so it can be selected with --project=chromium.
      name: "chromium",
      // Applies Playwright's standard desktop Chrome settings.
      use: { ...devices["Desktop Chrome"] },
    },
    /*
    Optional Firefox project; uncomment to enable it.
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    Optional WebKit/Safari project; uncomment to enable it.
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
    */
  ],
});