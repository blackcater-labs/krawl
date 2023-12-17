import type { ConsolaOptions, ConsolaReporter, LogObject } from 'consola'

export class FileReporter implements ConsolaReporter {
  constructor() {}

  log(logObj: LogObject, ctx: { options: ConsolaOptions }) {}
}
