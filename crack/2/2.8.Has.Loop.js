// Detect if linked list has a loop. If yes, find the start node.
function findLoopStart(node) {
  let cache = new Set()
  while (typeof node !== 'undefined') {
    if (cache.has(node)) {
      return node
    } else {
      cache.add(node)
    }
    node = node.next
  }
  return null
}

function findLoopStart2(node) {
  let fast = node
  let slow = node
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      break
    }
  }

  if (!fast || !fast.next) {
    return null
  }

  // Reset slow to head, and loop fast & slow at the same pace. the next time they meet, 
  // they shall meet at loop start
  slow = node
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return fast
}

let LinkedNode = require('./LinkedNode')
const should = require('chai').should()

let n1 = new LinkedNode('1-1')
let n2 = new LinkedNode('1-2')
let n3 = new LinkedNode('1-3')
let n4 = new LinkedNode('1-4')

n1.next = n2
n2.next = n3
n3.next = n4

let l2n1 = new LinkedNode('2-1')
let l2n2 = new LinkedNode('2-2')
let l2n3 = new LinkedNode('2-3')
let l2n4 = new LinkedNode('2-4')
n4.next = l2n4

l2n1.next = l2n2
l2n2.next = l2n3
l2n3.next = l2n2

should.equal(findLoopStart(n1), null)
findLoopStart(l2n1).should.equal(l2n2)
findLoopStart(l2n3).should.equal(l2n3)

// console.log(n1.toString())
should.equal(findLoopStart2(n1), null)
findLoopStart2(l2n1).should.equal(l2n2)
findLoopStart2(l2n3).should.equal(l2n3)