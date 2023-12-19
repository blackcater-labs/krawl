import process from 'node:process'
import path from 'node:path'
import { z } from 'zod'
import type { BasicConfig, LoggerConfig, Optional, ResolvedConfig, UserConfig, UserLoggerOptions } from './types'

export function resolveBasicConfig(config: UserConfig): BasicConfig {
  const schema = z.object({
    name: z.string().optional().default('krawl'),
    debug: z.boolean().optional().default(false),
    root: z.string().optional().default(process.cwd()),
    dataDir: z.string().optional().default('data'),
  })
  const resolvedConfig = schema.parse(config)

  resolvedConfig.dataDir = path.resolve(resolvedConfig.root, resolvedConfig.dataDir)

  return resolvedConfig
}

export function resolveLoggerConfig(config: Optional<UserLoggerOptions> = {}, basicConfig: BasicConfig): LoggerConfig {
  const schema = z.object({
    level: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'silent']).optional().default('info'),
    logDir: z.string().optional().default('logs'),
    logFileName: z.string().optional().default('krawl'),
    transport: z.array(z.any()).optional().default([]),
  })

  const resolvedConfig = schema.parse(config)

  resolvedConfig.logDir = path.resolve(basicConfig.dataDir, resolvedConfig.logDir)

  return {
    debug: basicConfig.debug,
    name: basicConfig.name,
    ...resolvedConfig,
  }
}

export function resolveConfig(config: UserConfig): ResolvedConfig {
  const basicConfig = resolveBasicConfig(config)
  const loggerConfig = resolveLoggerConfig(config.logger, basicConfig)

  return {
    ...basicConfig,
    plugins: config.plugins || [],
    logger: loggerConfig,
  }
}
