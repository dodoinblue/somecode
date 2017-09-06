// Partition a linked list around a value x, such that all nodes less than x
// come before all nodes greater than or equal to x. If x is contained within
// the list, the values of x only need to be after the elements less than x
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1, partition = 5
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
function partition(node, x) {
  let smallHead, smallTail
  let largeHead, largeTail
  while(node) {
    let tempNode = node.next
    if (node.data < x) {
      if (typeof smallHead === 'undefined') {
        smallHead = smallTail = node
      } else {
        smallTail.next = node
        smallTail = smallTail.next
      }
      delete smallTail.next
    } else {
      if (typeof largeHead === 'undefined') {
        largeHead = largeTail = node
      } else {
        largeTail.next = node
        largeTail = largeTail.next
      }
      delete largeTail.next
    }
    node = tempNode
  }
  smallTail.next = largeHead
  return smallHead
}

const should = require('chai').should()
let LinkedNode = require('./LinkedNode')
let fromArray = require('./Utils').fromArray

let input = fromArray([3, 5, 8, 5, 10, 2, 1])
let thres = 5
let output = partition(input, thres)
let partitioned = false
while (output) {
  if (output.data < thres) {
    partitioned.should.equal(false)
  } else {
    if (partitioned === false) {
      partitioned = true
    }
  }
  output = output.next
}