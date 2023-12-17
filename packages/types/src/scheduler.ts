export interface Scheduler {}
export interface SchedulerOptions {
  /**
   * The max task can be running at the same time.
   *
   * @default 10
   */
  concurrency?: number

  /**
   * The max retry times for a task.
   *
   * @default 3
   */
  retry?: number

  /**
   * The max task can be running in one minute. -1 means no limit.
   *
   * @default -1
   */
  maxPerMinute?: number
}
