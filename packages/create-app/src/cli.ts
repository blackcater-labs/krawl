import process from 'node:process'
import { consola } from 'consola'
import { create } from './index'

async function main() {
  const args = process.argv.slice(2)
  let dir = ''
  if (args[0] && !args[0].startsWith('-'))
    dir = args[0]

  try {
    await create(dir)
  }
  catch (err) {
    consola.error(err)
  }
}

main()
