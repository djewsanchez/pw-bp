import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html"], ["github"], ["list"]],
  use: {
    headless: true,
    // screenshot: "only-on-failure",
    // video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    /* Test against desktop browsers */
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
    // {
    //   name: "smoke",
    //   grep: /@smoke/,
    //   testDir: "./tests",
    // },
    // {
    //   name: "regression",
    //   grep: /@regression/,
    //   testDir: "./tests",
    // },
    // {
    //   name: "all",
    //   testDir: "./tests",
    // },
  ],
});
