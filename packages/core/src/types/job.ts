import type { Task } from './task'

export enum JobStatus {}

export interface Job {
  id: string
  name: string
  description: string
  tasks: Task[]
  createdAt: Date
  startedAt?: Date
  succeedAt?: Date
  failedAt?: Date
  cancelledAt?: Date
  status: JobStatus
  [key: string]: any
}
