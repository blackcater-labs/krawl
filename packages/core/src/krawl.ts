import EventEmitter from 'node:events'
import type { Logger } from 'pino'
import type { Optional, ResolvedConfig, UserConfig } from './types'
import { createLogger } from './logger'
import { PluginManager } from './plugin'
import { resolveConfig } from './config'

export class Krawl extends EventEmitter {
  _config: UserConfig
  _configResolved: ResolvedConfig
  _plugins: PluginManager

  _browser: any
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

  private async init() {}

  public static async launch(config: Optional<UserConfig> = {}) {
    const krawl = new Krawl(config)

    await krawl.init()

    return krawl
  }
}
