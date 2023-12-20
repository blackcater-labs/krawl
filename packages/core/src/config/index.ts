import process from 'node:process'
import path from 'node:path'
import { z } from 'zod'
import type { BasicConfig, BrowserConfig, LoggerConfig, Optional, Plugin, ResolvedConfig, UserBrowserOptions, UserConfig, UserLoggerOptions } from '../types'
import { runConfigHook, runConfigResolvedHook, sortPlugins } from '../plugin'

async function resolveBasicConfig(config: UserConfig): Promise<BasicConfig> {
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

async function resolveLoggerConfig(config: Optional<UserLoggerOptions> = {}, basicConfig: BasicConfig): Promise<LoggerConfig> {
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

async function resolveBrowserConfig(config: Optional<UserBrowserOptions> = {}, basicConfig: BasicConfig): Promise<BrowserConfig> {
  const schema = z.object({
    headless: z.boolean().optional().default(false),
    executablePath: z.string().optional(),
    userDataDir: z.string().optional().default('browser/user-data'),
    enableStealth: z.boolean().optional().default(false),
    enableAdblock: z.boolean().optional().default(false),
    defaultWindowSize: z.tuple([z.number(), z.number()]).optional().default([1920, 1080]),
    defaultArgs: z.array(z.string()).optional(),
    args: z.array(z.string()).optional().default([]),
  })
  const resolvedConfig = schema.parse(config)

  resolvedConfig.userDataDir = path.resolve(basicConfig.dataDir, resolvedConfig.userDataDir)

  return resolvedConfig
}

async function resolvePlugins(plugins: Plugin[]): Promise<Plugin[]> {
  const [prevPlugins, normalPlugins, postPlugins] = sortPlugins(plugins)

  return [...prevPlugins, ...normalPlugins, ...postPlugins]
}

export async function resolveConfig(config: UserConfig): Promise<ResolvedConfig> {
  const plugins = await resolvePlugins(config.plugins || [])

  config = await runConfigHook(config, plugins)

  const basicConfig = await resolveBasicConfig(config)
  const loggerConfig = await resolveLoggerConfig(config.logger, basicConfig)
  const browserConfig = await resolveBrowserConfig(config.browser, basicConfig)
  const resolvedConfig: ResolvedConfig = {
    ...basicConfig,
    logger: loggerConfig,
    browser: browserConfig,
    plugins,
  }

  await runConfigResolvedHook(resolvedConfig, plugins)

  return resolvedConfig
}
