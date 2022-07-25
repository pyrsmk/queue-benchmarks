// Based on https://github.com/datastructures-js/queue/blob/master/src/queue.js.

export default class Queue {
  private elements : Array<any> = []
  private offset = 0

  dequeue() : any {
    if (this.size() === 0) {
      return null
    }

    const first = this.front()
    this.offset += 1

    if (this.offset * 2 < this.elements.length) {
      return first
    }

    // only remove dequeued elements when reaching half size
    // to decrease latency of shifting elements.
    this.elements = this.elements.slice(this.offset)
    this.offset = 0
    return first
  }

  enqueue(item : any) {
    this.elements.push(item)
  }

  private front() : any {
    return this.size() > 0 ? this.elements[this.offset] : null
  }

  private size() : number {
    return this.elements.length - this.offset
  }
}
