import { cryptoRandomString } from 'https://deno.land/x/crypto_random_string@1.0.0/mod.ts'
import Queue1 from '../src/queue1.ts'
import Queue2 from '../src/queue2.ts'
import Queue3 from '../src/queue3.ts'
import Queue4 from '../src/queue4.ts'

const item = cryptoRandomString({length: 6})

const queues = {
  'queue1.ts': Queue1,
  'queue2.ts': Queue2,
  'queue3.ts': Queue3,
  'queue4.ts': Queue4,
}

for (const name in queues) {
  const Queue = queues[name as keyof typeof queues]

  Deno.bench(`${name}: enqueue/dequeue 1 item`, { group: '1 item' }, () => {
    const queue = new Queue()
    queue.enqueue(item)
    queue.dequeue()
  })

  Deno.bench(`${name}: enqueue/dequeue 1000 items`, { group: '1000 items' }, () => {
    const queue = new Queue()
    for (let i = 0; i < 1000; i++) {
      queue.enqueue(item)
    }
    for (let i = 0; i < 1000; i++) {
      queue.dequeue()
    }
  })

  Deno.bench(`${name}: enqueue/dequeue 10_000 items`, { group: '10_000 items' }, () => {
    const queue = new Queue()
    for (let i = 0; i < 10_000; i++) {
      queue.enqueue(item)
    }
    for (let i = 0; i < 10_000; i++) {
      queue.dequeue()
    }
  })

  Deno.bench(`${name}: enqueue/dequeue 100_000 items`, { group: '100_000 items' }, () => {
    const queue = new Queue()
    for (let i = 0; i < 100_000; i++) {
      queue.enqueue(item)
    }
    for (let i = 0; i < 100_000; i++) {
      queue.dequeue()
    }
  })
}
