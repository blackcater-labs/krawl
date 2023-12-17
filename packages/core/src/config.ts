import type { UserConfig } from '@krawl/types'
import { loadConfig as lCfg } from 'unconfig'

export async function loadConfig(): Promise<UserConfig> {
  return await lCfg({
    sources: [
      {
        files: 'krawl.config',
        extensions: ['ts'],
      },
    ],
    merge: false,
  })
}

export function defineConfig(config: UserConfig): UserConfig {
  return config
}
