import path from 'node:path'
import pino from 'pino'
import type { LoggerConfig } from '../types'

export function createLogger(config: LoggerConfig) {
  const logger = pino({
    name: config.name,
    level: config.level,
    serializers: {
      err: pino.stdSerializers.err,
      req: pino.stdSerializers.req,
      res: pino.stdSerializers.res,
    },
    transport: pino.transport({
      targets: [
        {
          target: 'pino-pretty',
          level: config.debug ? 'debug' : 'info',
          options: {
            colorize: true,
          },
        },
        {
          target: 'pino/file',
          level: 'silent',
          options: {
            destination: path.join(config.logDir, `${config.logFileName}.log`),
            mkdir: true,
            append: true,
          },
        },
        ...config.transport,
      ],
    }),
  })

  return logger
}
