import type { ResolvedConfig, UserConfig } from './config'

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
  config?: (config: UserConfig) => void

  /**
   * Modify the config after it has been resolved
   */
  configResolved?: (config: ResolvedConfig) => void
}

export interface PluginContext {}
