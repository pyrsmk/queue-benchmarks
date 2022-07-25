// Based on https://gist.github.com/pyrsmk/c1ffd70d8ae8e0f7ca2a5ff8db3ce8a3.

export default class Queue {
  private queue : Array<any> = []

  dequeue() : any {
    const item = this.queue.shift()
    if (item === undefined) {
      return null
    }
    return item
  }

  enqueue(item : any) {
    this.queue.push(item)
  }
}
