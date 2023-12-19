import type { UserConfig } from '@krawl/core'

export * from './types'
export * from './internal/start'
export * from './internal/create'

export function defineConfig(config: UserConfig): UserConfig {
  return config
}
