import type { TransportTargetOptions } from 'pino'

export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'silent'

export interface LoggerOptions {
  /**
   * Enable debug mode.
   *
   * @default false
   */
  debug?: boolean

  /**
   * The name of the logger.
   *
   * @default 'krawl'
   */
  name?: string

  /**
   * The log level of the logger.
   *
   * @default 'info'
   */
  level?: LogLevel

  /**
   * The log directory of the logger. Path is relative to the data directory.
   *
   * @default 'logs'
   */
  logDir?: string

  /**
   * The log file name of the logger.
   *
   * @default 'krawl'
   */
  logFileName?: string

  /**
   * The transports of the logger.
   */
  transport?: TransportTargetOptions[]
}
