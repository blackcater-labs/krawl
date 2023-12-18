import type { Server } from 'node:net'
import type { ResolvedConfig, UserConfig } from './config'
import type { Awaitable } from './utils'

export interface Plugin {
  /**
   * Plugin name, must be unique
   */
  name: string

  /**
   * Enforce the plugin to be executed before or after the other process
   */
  enforce?: 'pre' | 'post'

  /**
   * Modify the config
   */
  config?: (config: UserConfig) => Awaitable<UserConfig>

  /**
   * Modify the config after it has been resolved
   */
  configResolved?: (config: ResolvedConfig) => Awaitable<void>

  configureServer?: (server: Server) => Awaitable<void>
}

export interface PluginContext {}
