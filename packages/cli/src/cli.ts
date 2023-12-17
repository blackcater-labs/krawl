import { cac } from 'cac'
import { VERSION } from './constants'

const cli = cac('krawl')

interface GlobalCLIOptions {
  '--'?: string[]
}

// cli.option

// dev
cli.command('[root]', 'start dev server')
  .alias('dev')
  .action(async (_root: string, _options: GlobalCLIOptions) => {})

// build
cli.command('build [root]', 'build for production')
  .action(async (_root: string, _options: GlobalCLIOptions) => {})

cli.help()
cli.version(VERSION)

cli.parse()
