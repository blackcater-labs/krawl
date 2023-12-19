import path from 'node:path'
import fs from 'node:fs'
import afs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { consola } from 'consola'
import chalk from 'chalk'

const IGNORE_FILES = ['.DS_Store']
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const templatesDir = path.resolve(__dirname, '../templates')

interface CreateOption {
  name: string
  template: string
}

export async function create(dir: string) {
  if (dir) {
    dir = path.resolve(process.cwd(), dir)
    if (fs.existsSync(dir)) {
      const stats = fs.statSync(dir)
      if (stats.isDirectory()) {
        const files = fs.readdirSync(dir)
        if (files.some(file => !IGNORE_FILES.includes(file)))
          throw new Error(`Directory ${dir} is not empty.`)
      }
    }
  }

  const options: CreateOption = {
    name: '',
    template: '',
  }

  if (dir)
    options.name = path.basename(dir)
  if (!options.name) {
    options.name = await consola.prompt('The name of your app:', {
      type: 'text',
      default: 'my-app',
      placeholder: 'my-app',
    })
  }

  // @ts-expect-error-next-line
  options.template = await consola.prompt('Select a template:', {
    type: 'select',
    options: [
      { label: chalk.blue(chalk.bold('Krawl Plugin')), value: 'plugin-ts' },
      { label: chalk.red(chalk.bold('Krawl Application')), value: 'app-ts' },
    ],
  })

  consola.start(`Creating ${chalk.bold(options.name)}...`)
  await copyTemplate(dir, options)
  consola.success(`Successfully created ${chalk.bold(options.name)}.`)
}

async function copyTemplate(dir: string | undefined, options: CreateOption) {
  const sourceDir = path.resolve(templatesDir, options.template)
  if (dir) {
    await copyDir(sourceDir, dir, options)
  }
  else {
    const targetDir = path.resolve(process.cwd(), options.name)
    await copyDir(sourceDir, targetDir, options)
  }
}

async function copyDir(sourceDir: string, targetDir: string, options: CreateOption) {
  if (!fs.existsSync(targetDir))
    await afs.mkdir(targetDir, { recursive: true })

  const files = await afs.readdir(sourceDir)
  for (const file of files) {
    const src = path.resolve(sourceDir, file)
    const dest = path.resolve(targetDir, file)

    const stats = await afs.stat(src)
    if (stats.isDirectory()) { await copyDir(src, dest, options) }
    else if (IGNORE_FILES.includes(file)) { continue }
    else {
      const content = await afs.readFile(src, 'utf-8')
      const result = content
        .replace(/{{name}}/g, options.name)
        .replace(/{{template}}/g, options.template)
      await afs.writeFile(dest, result)
    }
  }
}
