import EventEmitter from 'node:events'
import type { Logger } from 'pino'
import type { Browser } from 'puppeteer'
import type { Optional, ResolvedConfig, UserConfig } from './types'
import { createLogger } from './logger'
import { resolveConfig } from './config'
import { createBrowser } from './browser'
import { PluginContainer } from './plugin'

export class Krawl extends EventEmitter {
  public static async launch(config: Optional<UserConfig> = {}) {
    const krawl = new Krawl(config)

    await krawl._init()

    return krawl
  }

  _config: UserConfig
  config!: ResolvedConfig
  pluginContainer!: PluginContainer
  browser!: Browser
  logger!: Logger

  private constructor(config: UserConfig) {
    super()
    this._config = config
  }

  private async _init() {
    this.config = await resolveConfig(this._config)
    this.logger = createLogger(this.config.logger)
    this.pluginContainer = new PluginContainer(this.config, this)
    this.browser = await createBrowser(this.config.browser)
  }

  public async pause() {}

  public async resume() {}
}
