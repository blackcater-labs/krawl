import { cac } from 'cac'
import { VERSION } from './constants'
import type { CreateCLIOptions, StartCLIOptions } from './types'
import { start } from './internal/start'
import { create } from './internal/create'

const cli = cac('krawl')

// start
cli.command('start', 'start krawl server')
  .action(async (options: StartCLIOptions) => {
    start(options)
  })

// create
cli.command('create [type]', 'create a new project')
  .alias('init')
  .alias('new')
  .action(async (type: string, options: CreateCLIOptions) => {
    create(type, options)
  })

cli.help()
cli.version(VERSION)

cli.parse()
