import EventEmitter from 'node:events'
import type { Logger } from 'pino'
import type { Browser } from 'puppeteer'
import type { Optional, ResolvedConfig, UserConfig } from './types'
import { createLogger } from './logger'
import { PluginManager } from './plugin'
import { resolveConfig } from './config'
import { createBrowser } from './browser'

export class Krawl extends EventEmitter {
  public static async launch(config: Optional<UserConfig> = {}) {
    const krawl = new Krawl(config)

    await krawl.init()

    return krawl
  }

  _config: UserConfig
  _configResolved: ResolvedConfig
  _plugins: PluginManager

  _browser!: Browser
  _scheduler: any
  _snapshot: any
  _storage: any
  _logger: Logger

  private constructor(config: UserConfig) {
    super()

    this._plugins = new PluginManager(...(config.plugins || []))
    this._plugins.config(config)
    this._config = config
    this._configResolved = resolveConfig(config)
    this._plugins.configResolved(this._configResolved)
    this._logger = createLogger(this._configResolved.logger)
  }

  private async init() {
    await this.initBrowser()
  }

  private async initBrowser() {
    this._browser = await createBrowser(this._configResolved.browser)
  }

  public async pause() {}

  public async resume() {}
}
