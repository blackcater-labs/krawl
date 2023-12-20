import type { ResolvedConfig, UserConfig } from './config'
import type { Awaitable } from './utils'

export type ObjectHook<T> = T | { order?: 'pre' | 'post', handler: T }

export type HookHandler<T> = T extends ObjectHook<infer H> ? H : T

export type PluginWithRequiredHook<K extends keyof Plugin> = Plugin & {
  [P in K]: NonNullable<Plugin[P]>
}

export type PluginHookKeys = Exclude<keyof Plugin, 'name' | 'enforce'>

export interface PluginHookUtils {
  getSortedPlugins: <K extends PluginHookKeys>(hookName: K) => PluginWithRequiredHook<K>[]
  getSortedPluginHooks: <K extends PluginHookKeys>(hookName: K) => NonNullable<HookHandler<Plugin[K]>>[]
}

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
  config?: ObjectHook<(this: void, config: Omit<UserConfig, 'plugins'>) => Awaitable<void | Omit<UserConfig, 'plugins'>>>

  /**
   * Modify the config after it has been resolved
   */
  configResolved?: ObjectHook<(this: void, config: ResolvedConfig) => Awaitable<void>>
}

export interface PluginContext {}
