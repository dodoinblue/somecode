// Given two singly linked list, determin if the two lists intersect
function findIntersection(l1, l2) {
  while(typeof l1 !== 'undefined') {
    let pointer = l2
    while(typeof pointer !== 'undefined') {
      if (l1 === pointer) {
        return true
      }
      pointer = pointer.next
    }
    l1 = l1.next
  }
  return false
}

// Option 2
function getTailNode(node) {
  let pointer = node
  while(typeof pointer.next !== 'undefined') {
    pointer = pointer.next
  }
  return pointer
}

function isIntersect(l1, l2) {
  return getTailNode(l1) === getTailNode(l2)
}

let LinkedNode = require('./LinkedNode')
const should = require('chai').should()

let n1 = new LinkedNode('1-1')
let n2 = new LinkedNode('1-2')
let n3 = new LinkedNode('1-3')
let n4 = new LinkedNode('1-4')

let l2n1 = new LinkedNode('2-1')
let l2n2 = new LinkedNode('2-2')

let l3n1 = new LinkedNode('3-1')
let l3n2 = new LinkedNode('3-2')

n1.next = n2
n2.next = n3
n3.next = n4

l2n1.next = l2n2
l2n2.next = n3

l3n1.next = l3n2

findIntersection(n1, l2n1).should.equal(true)
findIntersection(n1, l3n1).should.equal(false)

isIntersect(n1, l2n1).should.equal(true)
isIntersect(n1, l3n1).should.equal(false)