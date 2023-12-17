import type { Logger } from '@krawl/types'
import type { EngineOptions } from '../types'
import { createLogger } from '../logger'

export class Engine {
  #logger: Logger
  // #scheduler: Scheduler
  // #snapshot: Snapshot
  // #storage: Storage
  // #proxy: ProxyPool
  // #driver: Driver

  constructor(options: EngineOptions = {}) {
    this.#logger = createLogger(options.logger)
  }
}
