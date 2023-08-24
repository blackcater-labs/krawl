import { resolve } from 'node:path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@krawl/arhive': r('./packages/arhive/src/'),
  '@krawl/cli': r('./packages/cli/src/'),
  '@krawl/core': r('./packages/core/src/'),
  '@krawl/ui': r('./packages/ui/node/'),
  '@krawl/utils': r('./packages/utils/src/'),
}
