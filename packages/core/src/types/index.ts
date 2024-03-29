import type { Promisable } from './utils'

export * from './utils'

export interface BrowserOptions {
  /**
   * Whether to run the browser in headless mode. true for new headless mode and false for disable headless mode.
   *
   * @default false
   */
  headless?: boolean

  /**
   * Path to a Chromium or Chrome executable to run instead of the bundled Chromium.
   */
  executablePath?: string

  /**
   * Specifies the path to a User Data Directory. Path is relative to the data directory.
   *
   * @default "browser/user-data"
   */
  userDataDir?: string

  /**
   * Whether to enable stealth plugin. Prevent to be detected as a bot.
   *
   * @default false
   */
  enableStealth?: boolean

  /**
   * Whether to enable adblock plugin. Degr
   *
   * @default false
   */
  enableAdblock?: boolean

  /**
   * Default window size of browser.
   *
   * @default [1920, 1080]
   */
  defaultWindowSize?: [number, number]

  /**
   * Krawl use many default args when launch a browser instance. You can override them by this option.
   */
  defaultArgs?: string[]

  /**
   * Extera arguments to pass to create a browser instance.
   */
  args?: string[]
}

export enum JobStatus {
  WAIT = 'wait',
  WAIT_CHILDREN = 'wait-children',
  DELAYED = 'delayed',
  ACTIVE = 'active',
  FAILED = 'failed',
  COMPLETED = 'completed',
}

export interface JobPayload {
  [key: string]: any
}

export enum JobPriority {
  LOWEST = 0,
  LOW = 1,
  NORMAL = 2,
  HIGH = 3,
  HIGHEST = 4,
}

export interface JobRetryCount {
  count: number
  delay: number // milliseconds
  backoff: {
    type: 'fixed' | 'exponential'
    delay: number // milliseconds
  }
}

export type JobRetry = JobRetryCount

export interface Job {
  id: string
  parentId?: string
  name: string
  payload: JobPayload
  status: JobStatus
  priority: JobPriority
  retry: JobRetry
  createdAt: Date
  updatedAt?: Date
  startedAt?: Date
  finishedAt?: Date
  failedAt?: Date
}

export interface IScheduler {
  createQueue(name: string): Promisable<void>
  createJob(queue: string, job: Job): Promisable<void>
}
