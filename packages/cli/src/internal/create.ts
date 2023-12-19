import { consola } from 'consola'
import type { CreateCLIOptions } from '../types'

export function create(type?: string, options: CreateCLIOptions = {}) {
  consola.log('create:', type, options)
}
