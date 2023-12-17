import type { DriverOptions, LoggerOptions, ProxyOptions, SchedulerOptions, SnapshotOptions, StorageOptions } from '@krawl/types'

export interface EngineOptions {
  /**
   * The root directory of the project.
   *
   * @default process.cwd()
   */
  root?: string

  /**
   * Whether to enable debug mode.
   *
   * @default false
   */
  debug?: boolean

  /**
   * Setting proxy for special url.
   */
  proxy?: ProxyOptions

  /**
   * Setting the driver for the engine.
   */
  driver?: DriverOptions

  /**
   * Setting the logger for the engine.
   */
  logger?: LoggerOptions

  /**
   * Setting the scheduler for the engine.
   */
  scheduler?: SchedulerOptions

  /**
   * Setting the storage for the engine.
   */
  storage?: StorageOptions

  /**
   * Setting the snapshot for the engine.
   */
  snapshot?: SnapshotOptions
}
