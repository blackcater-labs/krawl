import type { LoggerOptions } from './logger'
import type { Plugin } from './plugin'

export interface BasicOptions {
  /**
   * Enable debug mode.
   *
   * @default false
   */
  debug?: boolean

  /**
   * The root directory of the project.
   *
   * @default process.cwd()
   */
  root?: string

  /**
   * The directory where the data is stored. Data includes snapshots, logs, etc.
   *
   * @default "data"
   */
  dataDir?: string

  /**
   * The name of the project.
   */
  name?: string
}
export type UserLoggerOptions = Omit<LoggerOptions, 'debug' | 'name'>
export interface UserOptions extends BasicOptions {
  /**
   * Plugins to be applied to the project.
   */
  plugins?: Plugin[]

  /**
   * Logger options.
   */
  logger?: UserLoggerOptions
}
export type UserConfig = UserOptions

export type BasicConfig = Required<BasicOptions>
export type LoggerConfig = Required<LoggerOptions>
export interface ResolvedConfig extends BasicConfig {
  /**
   * Plugins to be applied to the project.
   */
  plugins: Plugin[]

  /**
   * Logger options.
   */
  logger: LoggerConfig
}
