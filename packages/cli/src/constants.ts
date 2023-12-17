import { readFileSync } from 'node:fs'

const { version } = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url)).toString(),
)

export const VERSION = version as string

export const loopbackHosts = new Set([
  'localhost',
  '127.0.0.1',
  '::1',
  '0000:0000:0000:0000:0000:0000:0000:0001',
])
export const wildcardHosts = new Set([
  '0.0.0.0',
  '::',
  '0000:0000:0000:0000:0000:0000:0000:0000',
])

export const DEFAULT_DEV_PORT = 6776
