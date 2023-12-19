import { describe, expect, it } from 'vitest'
import { PriorityQueue } from './PriorityQueue'

describe('priorityQueue', () => {
  it('should work for numbers', () => {
    const queue = new PriorityQueue<number>((a, b) => a > b)

    queue.push(1)
    queue.push(2)
    queue.push(3)
    queue.push(4)
    queue.push(5)
    expect(queue.size()).toBe(5)
    expect(queue.pop()).toBe(5)
    expect(queue.pop()).toBe(4)
    expect(queue.pop()).toBe(3)
    expect(queue.pop()).toBe(2)
    expect(queue.pop()).toBe(1)
    expect(queue.pop()).toBe(undefined)
    expect(queue.isEmpty()).toBe(true)
  })

  it('should work for objects', () => {
    const queue = new PriorityQueue<{ priority: number }>((a, b) => a.priority > b.priority)

    queue.push({ priority: 1 })
    queue.push({ priority: 2 })
    queue.push({ priority: 3 })
    queue.push({ priority: 4 })
    queue.push({ priority: 5 })
    expect(queue.size()).toBe(5)
    expect(queue.pop()).toEqual({ priority: 5 })
    expect(queue.pop()).toEqual({ priority: 4 })
    expect(queue.pop()).toEqual({ priority: 3 })
    expect(queue.pop()).toEqual({ priority: 2 })
    expect(queue.pop()).toEqual({ priority: 1 })
    expect(queue.pop()).toBe(undefined)
    expect(queue.isEmpty()).toBe(true)
  })

  it('should work for complex objects', () => {
    const queue = new PriorityQueue<{ priority: number, deepth: number }>((a, b) => a.deepth > b.deepth ? true : (a.deepth === b.deepth ? a.priority > b.priority : false))

    queue.push({ priority: 2, deepth: 1 })
    queue.push({ priority: 1, deepth: 2 })
    queue.push({ priority: 4, deepth: 1 })
    queue.push({ priority: 3, deepth: 3 })
    queue.push({ priority: 5, deepth: 2 })
    expect(queue.size()).toBe(5)
    expect(queue.pop()).toEqual({ priority: 3, deepth: 3 })
    expect(queue.pop()).toEqual({ priority: 5, deepth: 2 })
    expect(queue.pop()).toEqual({ priority: 1, deepth: 2 })
    expect(queue.pop()).toEqual({ priority: 4, deepth: 1 })
    expect(queue.pop()).toEqual({ priority: 2, deepth: 1 })
    expect(queue.pop()).toBe(undefined)
    expect(queue.isEmpty()).toBe(true)
  })
})
