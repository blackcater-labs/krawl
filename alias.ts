import { resolve } from 'node:path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@krawl/arhive': r('./packages/arhive/src/'),
  '@krawl/core': r('./packages/core/src/'),
  '@krawl/robotstxt': r('./packages/robotstxt/src/'),
  '@krawl/server': r('./packages/server/src/'),
  '@krawl/test-utils': r('./packages/test-utils/src/'),
  '@krawl/utils': r('./packages/utils/src/'),
}
