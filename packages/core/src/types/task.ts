export enum TaskStatus {
  // Waiting to be scheduled
  Waiting,
  // Task is running
  Running,
  // Succeed in of the retry times
  Succeed,
  // Failed after all the retry times
  Failed,
  // Task is paused when task is waiting
  Paused,
  // Task is cancelled by user or some reason
  Cancelled,
}

export interface Task {
  // Task id
  id: string
  // Task name
  name: string
  // Parent task id
  parentId?: string
  // Task priority
  priority: number
  // Task depth
  depth: number
  // Task retry count
  retryCount: number
  // Task current retry count
  currentRetryCount: number
  // Task timeout seconds
  timeout: number
  // Task created time
  createdAt: Date
  // Task started time
  startedAt?: Date
  // Task finished time
  succeedAt?: Date
  // Task failed time
  failedAt?: Date
  // Task cancelled time
  cancelledAt?: Date
  // Task current status
  status: TaskStatus

  [key: string]: any
}
