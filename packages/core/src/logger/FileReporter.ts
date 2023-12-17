import type { LogObject } from 'consola'
import { BasicReporter } from './BasicReporter'

export class FileReporter extends BasicReporter {
  log(logObj: LogObject) {
    const [message] = this.formatArgs(logObj.args).split(
      '\n',
    )
    const obj = {
      date: logObj.date,
      type: logObj.type,
      level: logObj.level,
      message,
      error: '',
      ctx: logObj.ctx || {},
      meta: logObj.meta || {},
    }

    if (logObj.args?.[0] instanceof Error)
      obj.error = logObj.args[0].stack || ''

    console.log(obj)
  }
}
