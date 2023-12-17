export interface Snapshot {}
export interface SnapshotOptions {
  /**
   * The snapshot strategy.
   *
   * @default 'perTask'
   */
  strategy?: 'perTask' | 'perMinute'
}
