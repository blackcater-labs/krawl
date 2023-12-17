import { formatWithOptions } from 'node:util'
import { sep } from 'node:path'
import process from 'node:process'
import type { ConsolaReporter } from 'consola'
import type { LogObject } from '@krawl/types'

export function parseStack(stack: string) {
  const cwd = process.cwd() + sep

  const lines = stack
    .split('\n')
    .splice(1)
    .map(l => l.trim().replace('file://', '').replace(cwd, ''))

  return lines
}

export function writeStream(data: any, stream: NodeJS.WriteStream) {
  const write = (stream as any).__write || stream.write
  return write.call(stream, data)
}

const bracket = (x: string) => (x ? `[${x}]` : '')

export class BasicReporter implements ConsolaReporter {
  formatStack(stack: string) {
    return `  ${parseStack(stack).join('\n  ')}`
  }

  formatArgs(args: any[]) {
    const _args = args.map((arg) => {
      if (arg && typeof arg.stack === 'string')
        return `${arg.message}\n${this.formatStack(arg.stack)}`

      return arg
    })

    // Only supported with Node >= 10
    // https://nodejs.org/api/util.html#util_util_inspect_object_options
    return formatWithOptions({}, ..._args)
  }

  formatDate(date: Date) {
    return date.toLocaleTimeString()
  }

  filterAndJoin(arr: any[]) {
    return arr.filter(Boolean).join(' ')
  }

  formatLogObj(logObj: LogObject) {
    const message = this.formatArgs(logObj.args || [])

    return this.filterAndJoin([
      bracket(logObj.type!),
      bracket(logObj.tag!),
      message,
    ])
  }

  log(logObj: LogObject) {
    const line = this.formatLogObj(logObj)

    return writeStream(
      `${line}\n`,
      logObj.level! < 2
        ? process.stderr
        : process.stdout,
    )
  }
}
