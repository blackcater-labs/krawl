export type LogType = 'silent' | 'fatal' | 'error' | 'warn' | 'log' | 'info' | 'success' | 'fail' | 'ready' | 'start' | 'box' | 'debug' | 'trace' | 'verbose'

export enum LogLevel {
  SILENT = -999,
  ERROR = 0,
  WARN = 1,
  NORMAL = 2,
  INFO = 3,
  DEBUG = 4,
  TRACE = 5,
  VERBOSE = 999,
}

export interface LogObject {
  level?: LogLevel
  tag?: string
  type?: LogType
  message?: string
  args?: any[]
  date?: Date
  ctx?: Record<string, any>
  meta?: Record<string, any>
}

export interface Logger {
  context(ctx: Record<string, any>): Logger
  log(message?: string | LogObject, ...optionalParams: any[]): void
  debug(message?: string | LogObject, ...optionalParams: any[]): void
  info(message?: string | LogObject, ...optionalParams: any[]): void
  warn(message?: string | LogObject, ...optionalParams: any[]): void
  error(message?: string | Error | LogObject, ...optionalParams: any[]): void
}

export interface LoggerOptions {
  /**
   * The log level of the logger.
   *
   * @default LogLevel.INFO
   */
  level?: LogLevel

  /**
   * Add fancy reporter to the logger.
   *
   * @default true
   */
  fancy?: boolean
}
