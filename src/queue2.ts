// Based on https://codesandbox.io/s/a-performant-async-queue-l1jbs6.

export default class Queue {
  private collect : Array<any> = []
  private execute : Array<any> = []
  private pointer = 0

  dequeue() : any {
    if (!this.more()) {
      return null
    }
    const item = this.execute[this.pointer]
    this.next()
    return item
  }

  enqueue(item : any) {
    this.collect.push(item)
  }

  private more() : boolean {
    if (this.pointer < this.execute.length) {
      return true
    }
    if (this.pointer >= this.execute.length && this.collect.length < 1) {
      return false
    }
    this.swap()
    return true
  }

  private next() : void {
    this.pointer += 1
  }

  private swap() : void {
    this.execute.length = 0
    this.pointer = 0;
    [this.execute, this.collect] = [this.collect, this.execute]
  }
}
