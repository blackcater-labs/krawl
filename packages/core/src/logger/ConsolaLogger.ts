import { LogLevel } from '@krawl/types'
import type { LogObject, LoggerOptions } from '@krawl/types'
import { type ConsolaInstance, createConsola } from 'consola/core'
import { z } from 'zod'

import { FancyReporter } from './FancyReporter'
import { FileReporter } from './FileReporter'

const ConsolaLoggerOptionsSchema = z.object({
  level: z.number().default(LogLevel.VERBOSE).superRefine((val, ctx) => {
    if ((val < 0 && val !== -999) || (val > 5 && val !== 999)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid log level',
      })
    }
  }),
  fancy: z.boolean().default(true),
})

export type LoggerConfig = z.infer<typeof ConsolaLoggerOptionsSchema>

export class ConsolaLogger {
  #logger: ConsolaInstance

  constructor(options: LoggerOptions = {}) {
    const config = ConsolaLoggerOptionsSchema.parse(options)

    this.#logger = createConsola({
      level: config.level,
      formatOptions: {
        colors: config.fancy,
        date: true,
      },
    })
    if (config.fancy)
      this.#logger.addReporter(new FancyReporter())
    this.#logger.addReporter(new FileReporter())
  }

  log(message?: string | LogObject, ...optionalParams: any[]): void {
    this.#logger.log(message, ...optionalParams)
  }

  debug(message?: string | LogObject, ...optionalParams: any[]): void {
    this.#logger.debug(message, ...optionalParams)
  }

  info(message?: string | LogObject, ...optionalParams: any[]): void {
    this.#logger.info(message, ...optionalParams)
  }

  warn(message?: string | LogObject, ...optionalParams: any[]): void {
    this.#logger.warn(message, ...optionalParams)
  }

  error(message?: string | Error | LogObject, ...optionalParams: any[]): void {
    this.#logger.error(message, ...optionalParams)
  }
}
