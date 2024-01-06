import { resolve } from 'node:path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@krawl/arhive': r('./packages/arhive/src/'),
  '@krawl/core': r('./packages/core/src/'),
  '@krawl/express': r('./packages/express/src/'),
  '@krawl/fastify': r('./packages/fastify/src/'),
  '@krawl/hapi': r('./packages/hapi/src/'),
  '@krawl/koa': r('./packages/koa/src/'),
  '@krawl/nestjs': r('./packages/nestjs/src/'),
  '@krawl/robotstxt': r('./packages/robotstxt/src/'),
  '@krawl/server': r('./packages/server/src/'),
  '@krawl/test-utils': r('./packages/test-utils/src/'),
  '@krawl/utils': r('./packages/utils/src/'),
}
