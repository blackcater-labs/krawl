import type { UserConfig } from '@krawl/types'
import type { LoadConfigResult } from 'unconfig'
import { createConfigLoader } from 'unconfig'

export async function loadConfig(): Promise<LoadConfigResult<UserConfig>> {
  const { load } = createConfigLoader<UserConfig>({
    sources: [
      {
        files: ['krawl.config'],
      },
    ],
  })

  return await load()
}

export function defineConfig(config: UserConfig): UserConfig {
  return config
}
