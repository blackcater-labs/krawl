export interface BrowserOptions {
  /**
   * Whether to run the browser in headless mode. true for new headless mode and false for disable headless mode.
   *
   * @default false
   */
  headless?: boolean

  /**
   * Path to a Chromium or Chrome executable to run instead of the bundled Chromium.
   */
  executablePath?: string

  /**
   * Specifies the path to a User Data Directory. Path is relative to the data directory.
   *
   * @default "browser/user-data"
   */
  userDataDir?: string

  /**
   * Whether to enable stealth plugin. Prevent to be detected as a bot.
   *
   * @default false
   */
  enableStealth?: boolean

  /**
   * Whether to enable adblock plugin. Degr
   *
   * @default false
   */
  enableAdblock?: boolean

  /**
   * Default window size of browser.
   *
   * @default [1920, 1080]
   */
  defaultWindowSize?: [number, number]

  /**
   * Krawl use many default args when launch a browser instance. You can override them by this option.
   */
  defaultArgs?: string[]

  /**
   * Extera arguments to pass to create a browser instance.
   */
  args?: string[]
}
