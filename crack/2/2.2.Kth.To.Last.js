function kthToLast(node, k) {
  let runner = node
  for (let i = 0; i < k; i++) {
    runner = runner.next
    if(!runner) {
      return null
    }
  }
  let pointer = node
  while(runner.next) {
    runner = runner.next
    pointer = pointer.next
  }
  return pointer
}

const should = require('chai').should()
let LinkedNode = require('./LinkedNode')

let node1 = new LinkedNode(1)
let node2 = new LinkedNode(2)
node2.prev = node1
let node3 = new LinkedNode(3)
node3.prev = node2
let node4 = new LinkedNode(4)
node4.prev = node3
let node5 = new LinkedNode(5)
node5.prev = node4
let node6 = new LinkedNode(6)
node6.prev = node5

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

kthToLast(node1, 0).data.should.equal(6)
kthToLast(node1, 3).data.should.equal(3)
kthToLast(node1, 5).data.should.equal(1)
should.equal(kthToLast(node1, 6), null)