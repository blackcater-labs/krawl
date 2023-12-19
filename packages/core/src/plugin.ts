import type { Plugin, ResolvedConfig, UserConfig } from './types'

export class PluginManager {
  _prePlugins: Plugin[]
  _plugins: Plugin[]
  _postPlugins: Plugin[]

  constructor(...plugins: Plugin[]) {
    this._prePlugins = []
    this._plugins = []
    this._postPlugins = []

    this.addPlugins(...plugins)
  }

  public async addPlugins(...plugins: Plugin[]) {
    for (const plugin of plugins) {
      if (plugin.enforce === 'pre')
        this._prePlugins.push(plugin)
      else if (plugin.enforce === 'post')
        this._postPlugins.push(plugin)
      else this._plugins.push(plugin)
    }

    this._checkPlugins()
  }

  private _checkPlugins() {
    const names = new Set()
    for (const plugin of this._prePlugins) {
      if (names.has(plugin.name))
        throw new Error(`Plugin name "${plugin.name}" has been used.`)
      names.add(plugin.name)
    }
    for (const plugin of this._plugins) {
      if (names.has(plugin.name))
        throw new Error(`Plugin name "${plugin.name}" has been used.`)
      names.add(plugin.name)
    }
    for (const plugin of this._postPlugins) {
      if (names.has(plugin.name))
        throw new Error(`Plugin name "${plugin.name}" has been used.`)
      names.add(plugin.name)
    }
  }

  public config(config: UserConfig) {
    const prevPlguins = [...(config.plugins || [])]

    for (const plugin of this._prePlugins)
      plugin.config?.(config)
    for (const plugin of this._plugins)
      plugin.config?.(config)
    for (const plugin of this._postPlugins)
      plugin.config?.(config)

    const nextPlugins = [...(config.plugins || [])]

    let i = 0
    let j = 0
    while (i < prevPlguins.length && j < nextPlugins.length) {
      if (prevPlguins[i].name === nextPlugins[j].name) {
        i++
        j++
        continue
      }

      const plugin = nextPlugins[j]
      this.addPlugins(plugin)

      plugin.config?.(config) // TODO: check if this is necessary
      j++
    }
  }

  public configResolved(config: ResolvedConfig) {
    for (const plugin of this._prePlugins)
      plugin.configResolved?.(config)
    for (const plugin of this._plugins)
      plugin.configResolved?.(config)
    for (const plugin of this._postPlugins)
      plugin.configResolved?.(config)
  }
}
