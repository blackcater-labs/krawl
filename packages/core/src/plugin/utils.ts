import type { HookHandler, ObjectHook, Plugin, PluginHookKeys, PluginHookUtils, PluginWithRequiredHook, ResolvedConfig, UserConfig } from '../types'
import { mergeDeep } from '../utils'

export function createPluginHookUtils(plugins: Plugin[]): PluginHookUtils {
  const sortedPluginsCache = new Map<PluginHookKeys, Plugin[]>()

  function getSortedPlugins<K extends PluginHookKeys>(hookName: K) {
    if (sortedPluginsCache.has(hookName))
      return sortedPluginsCache.get(hookName) as PluginWithRequiredHook<K>[]

    const sorted = getSortedPluginsByHook(hookName, plugins)
    sortedPluginsCache.set(hookName, sorted)
    return sorted
  }

  function getSortedPluginHooks<K extends PluginHookKeys>(
    hookName: K,
  ): NonNullable<HookHandler<Plugin[K]>>[] {
    const plugins = getSortedPlugins(hookName)
    return plugins.map(p => getHookHandler(p[hookName])).filter(Boolean)
  }

  return {
    getSortedPlugins,
    getSortedPluginHooks,
  }
}

export function getSortedPluginsByHook<K extends PluginHookKeys>(
  hookName: K,
  plugins: Plugin[],
) {
  const pre: Plugin[] = []
  const normal: Plugin[] = []
  const post: Plugin[] = []

  for (const plugin of plugins) {
    const hook = plugin[hookName]
    if (hook) {
      if (typeof hook === 'object') {
        if (hook.order === 'pre') {
          pre.push(plugin)
          continue
        }
        if (hook.order === 'post') {
          post.push(plugin)
          continue
        }
      }
      normal.push(plugin)
    }
  }

  return [...pre, ...normal, ...post] as PluginWithRequiredHook<K>[]
}

export function getHookHandler<T extends ObjectHook<Function>>(
  hook: T,
): HookHandler<T> {
  return (typeof hook === 'object' ? hook.handler : hook) as HookHandler<T>
}

export function sortPlugins(
  plugins: (Plugin | Plugin[])[] | undefined,
): [Plugin[], Plugin[], Plugin[]] {
  const prePlugins: Plugin[] = []
  const postPlugins: Plugin[] = []
  const normalPlugins: Plugin[] = []

  if (plugins) {
    plugins.flat().forEach((p) => {
      if (p.enforce === 'pre')
        prePlugins.push(p)
      else if (p.enforce === 'post')
        postPlugins.push(p)
      else normalPlugins.push(p)
    })
  }

  return [prePlugins, normalPlugins, postPlugins]
}

export async function runConfigHook(
  config: UserConfig,
  plugins: Plugin[],
): Promise<UserConfig> {
  let conf = config

  for (const p of getSortedPluginsByHook('config', plugins)) {
    const hook = p.config
    const handler = getHookHandler(hook)
    if (handler) {
      const res = await handler(conf)
      if (res)
        conf = mergeDeep(conf, res)
    }
  }

  return conf
}

export async function runConfigResolvedHook(
  config: ResolvedConfig,
  plugins: Plugin[],
): Promise<void> {
  for (const p of getSortedPluginsByHook('configResolved', plugins)) {
    const hook = p.configResolved
    const handler = getHookHandler(hook)
    if (handler)
      await handler(config)
  }
}
