import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts'
import { assertEquals } from 'https://deno.land/std@0.147.0/testing/asserts.ts'
import { cryptoRandomString } from 'https://deno.land/x/crypto_random_string@1.0.0/mod.ts'
import Queue1 from '../src/queue1.ts'
import Queue2 from '../src/queue2.ts'
import Queue3 from '../src/queue3.ts'
import Queue4 from '../src/queue4.ts'

const random = () => cryptoRandomString({length: 6})

const queues = {
  'queue1.ts': Queue1,
  'queue2.ts': Queue2,
  'queue3.ts': Queue3,
  'queue4.ts': Queue4,
}

for (const name in queues) {
  const Queue = queues[name as keyof typeof queues]

  describe(name, () => {
    it('Adds and removes an item', () => {
      const queue = new Queue()
      const item = random()
      queue.enqueue(item)
      assertEquals(queue.dequeue(), item)
    })

    it('Returns null when there is no element', () => {
      const queue = new Queue()
      assertEquals(queue.dequeue(), null)
    })

    it('Returns null when no elements are left', () => {
      const queue = new Queue()
      queue.enqueue(random())
      queue.dequeue()
      assertEquals(queue.dequeue(), null)
    })
  })
}
