// Based on https://popovich.io/2020/2020-04-07-queue-javascript/.

type Data = { [key: number]: any }

export default class Queue {
  private data = {} as Data
  private head = 0
  private tail = 0

  dequeue() {
    const item : any = this.data[this.head]

    delete this.data[this.head]

    if (item === undefined) {
      return null
    }

    this.head++
    return item
  }

  enqueue(item : any) {
    this.data[this.tail] = item
    this.tail++
  }
}
