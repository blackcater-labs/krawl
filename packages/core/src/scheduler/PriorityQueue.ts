type CompareFn<T> = (a: T, b: T) => boolean

export class PriorityQueue<T> {
  _heap: T[]
  _compareFn: CompareFn<T>

  constructor(compareFn: CompareFn<T>) {
    this._heap = []
    this._compareFn = compareFn
  }

  public size() {
    return this._heap.length
  }

  public isEmpty() {
    return this._heap.length === 0
  }

  public peek() {
    return this._heap[0]
  }

  public push(item: T) {
    this._heap.push(item)
    this._siftUp()
  }

  private _siftUp() {
    let node = this._heap.length - 1
    while (node > 0) {
      const parent = (node - 1) >> 1
      if (this._compareFn(this._heap[node], this._heap[parent])) {
        this._swap(node, parent)
        node = parent
      }
      else {
        break
      }
    }
  }

  public pop() {
    if (this._heap.length === 0)
      return undefined

    const top = this._heap[0]
    const last = this._heap.pop()!
    if (this._heap.length > 0) {
      this._heap[0] = last
      this._siftDown()
    }
    return top
  }

  private _siftDown() {
    let node = 0
    const last = this._heap.length - 1
    while (true) {
      let min = node
      const left = node * 2 + 1
      const right = node * 2 + 2
      if (left <= last && this._compareFn(this._heap[left], this._heap[min]))
        min = left

      if (right <= last && this._compareFn(this._heap[right], this._heap[min]))
        min = right

      if (min !== node) {
        this._swap(min, node)
        node = min
      }
      else {
        break
      }
    }
  }

  _swap(a: number, b: number) {
    const tmp = this._heap[a]
    this._heap[a] = this._heap[b]
    this._heap[b] = tmp
  }
}
