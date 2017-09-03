// Remove duplicates from an unsorted linked list

let LinkedNode = require('./LinkedNode')

function removeDup(node) {
  let cache = new Set()
  while(node) {
    if (cache.has(node.data)) {
      node.prev.next = node.next
      if(node.next) {
        node.next.prev = node.prev
      }
    } else {
      cache.add(node.data)
    }
    node = node.next
  }
}

function removeDupNoCache(node) {
  while(node) {
    let runner = node.next
    debugger
    while(runner) {
      if(runner.data === node.data) {
        runner.prev.next = runner.next
        if(runner.next){
          runner.next.prev = runner.prev
        }
      }
      runner = runner.next
    }
    node = node.next
  }
}

var should = require('chai').should()

let node1 = new LinkedNode(1)
let node2 = new LinkedNode(2)
node2.prev = node1
let node3 = new LinkedNode(3)
node3.prev = node2
let node4 = new LinkedNode(4)
node4.prev = node3
let node5 = new LinkedNode(5)
node5.prev = node4
let nodeDup = new LinkedNode(3)
nodeDup.prev = node5

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = nodeDup

removeDupNoCache(node1)
node1.next.should.equal(node2)
node2.next.should.equal(node3)
node3.next.should.equal(node4)
node4.next.should.equal(node5)
should.equal(node5.next, undefined)

node1 = new LinkedNode(1)
node2 = new LinkedNode(1)
node2.prev = node1
node3 = new LinkedNode(1)
node3.prev = node2
node1.next = node2
node2.next = node3
removeDupNoCache(node1)
node1.data.should.equal(1)
should.equal(node1.next, undefined)