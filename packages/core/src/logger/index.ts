import type { LogObject, Logger, LoggerOptions } from '@krawl/types'
import { ConsolaLogger } from './ConsolaLogger'

export * from './ConsolaLogger'
export * from './FancyReporter'
export * from './FileReporter'

let logger: ConsolaLogger | undefined

function loggerWithContext(ctx: Record<string, any>): Logger {
  return {
    context(ctx: Record<string, any>) {
      return loggerWithContext(ctx)
    },
    log(message?: string | LogObject, ...optionalParams: any[]) {
      let obj: LogObject = {
        args: optionalParams,
        ctx,
      }

      if (typeof message !== 'string') {
        obj = {
          ...message,
          ...obj,
        }
      }
      else {
        obj.message = message
      }

      logger?.log(obj)
    },
    debug(message?: string | LogObject, ...optionalParams: any[]) {
      let obj: LogObject = {
        args: optionalParams,
        ctx,
      }

      if (typeof message !== 'string') {
        obj = {
          ...message,
          ...obj,
        }
      }
      else {
        obj.message = message
      }

      logger?.debug(obj)
    },
    info(message?: string | LogObject, ...optionalParams: any[]) {
      let obj: LogObject = {
        args: optionalParams,
        ctx,
      }

      if (typeof message !== 'string') {
        obj = {
          ...message,
          ...obj,
        }
      }
      else {
        obj.message = message
      }

      logger?.info(obj)
    },
    warn(message?: string | LogObject, ...optionalParams: any[]) {
      let obj: LogObject = {
        args: optionalParams,
        ctx,
      }

      if (typeof message !== 'string') {
        obj = {
          ...message,
          ...obj,
        }
      }
      else {
        obj.message = message
      }

      logger?.warn(obj)
    },
    error(message?: string | Error | LogObject, ...optionalParams: any[]) {
      let obj: LogObject = {
        args: optionalParams,
        ctx,
      }

      if (typeof message === 'string') {
        obj.message = message
      }
      else if (message instanceof Error) {
        obj.args?.unshift(message)
      }
      else {
        obj = {
          ...message,
          ...obj,
        }
      }

      logger?.error(obj)
    },
  }
}

export function createLogger(options: LoggerOptions = {}): Logger {
  if (!logger)
    logger = new ConsolaLogger(options)

  return loggerWithContext({})
}
