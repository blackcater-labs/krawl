import type { Logger } from 'pino'
import type { Krawl } from '../krawl'
import type { PluginHookUtils, ResolvedConfig } from '../types'
import { createPluginHookUtils } from './utils'

export class PluginContainer {
  _config: ResolvedConfig
  _krawl: Krawl
  _logger: Logger
  _utils: PluginHookUtils

  constructor(config: ResolvedConfig, krawl: Krawl) {
    this._config = config
    this._krawl = krawl
    this._logger = krawl.logger
    this._utils = createPluginHookUtils(config.plugins)
  }
}
