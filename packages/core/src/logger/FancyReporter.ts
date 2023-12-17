import type { LogObject } from 'consola'
import type { LogType } from '@krawl/types'
import chalk from 'chalk'
import { BasicReporter, parseStack } from './BasicReporter'

type COLOR = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGray'
const TYPE_COLOR_MAP: { [k in LogType]?: [COLOR, COLOR] } = {
  log: ['bgWhite', 'black'],
  debug: ['bgMagenta', 'black'],
  info: ['bgCyan', 'black'],
  warn: ['bgYellow', 'black'],
  error: ['bgRed', 'black'],
}

function characterFormat(str: string) {
  return (
    str
      // highlight backticks
      .replace(/`([^`]+)`/gm, (_, m) => chalk.cyan(m))
      // underline underscores
      .replace(/\s+_([^_]+)_\s+/gm, (_, m) => ` ${chalk.underline(m)} `)
  )
}

export class FancyReporter extends BasicReporter {
  formatStack(stack: string) {
    return `\n${parseStack(stack).map(line => `  ${
     line
      .replace(/^at +/, m => chalk.gray(m))
      .replace(/\((.+)\)/, (_, m) => `(${chalk.cyan(m)})`)}`).join('\n')}`
  }

  formatType(logObj: LogObject) {
    if (!TYPE_COLOR_MAP[logObj.type])
      return ''
    const [bgColor, textColor] = TYPE_COLOR_MAP[logObj.type]!
    return chalk[bgColor](chalk[textColor](` ${logObj.type.toUpperCase()} `))
  }

  formatLogObj(logObj: LogObject) {
    const [message, ...additional] = this.formatArgs(logObj.args).split(
      '\n',
    )
    const date = this.formatDate(logObj.date)
    const coloredDate = date && chalk.gray(date)
    const type = this.formatType(logObj)

    let line = this.filterAndJoin([
      coloredDate,
      type,
      characterFormat(message),
    ])

    line += characterFormat(
      additional.length > 0 ? `\n${additional.join('\n')}` : '',
    )

    return line
  }
}
