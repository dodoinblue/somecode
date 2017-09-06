// Numbers represented by linked list. Function to calc sum
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) // 617 + 259
// Output: 2 -> 1 -> 9 // 912

let LinkedNode = require('./LinkedNode')

function sumList(l1, l2, carry) {
  if (typeof l1 === 'undefined' || typeof l2 === 'undefined') {
    throw new Error('Unexpected undefined node')
  }
  if (!carry) {
    carry = 0
  }
  let sum = l1.data + l2.data + carry
  carry = Math.floor(sum / 10)
  l1.data = sum % 10
  if (typeof l1.next !== 'undefined' || typeof l2.next !== 'undefined' || carry !== 0) {
    if (typeof l1.next === 'undefined') l1.next = new LinkedNode(0)
    sumList(l1.next, l2.next || new LinkedNode(0), carry)
  }
}

const should = require('chai').should()
let fromArray = require('./Utils').fromArray

let n1 = fromArray([7, 1, 6])
let n2 = fromArray([5, 9, 2])
let expected = fromArray([2, 1, 9])
sumList(n1, n2)
n1.toString().should.equal(expected.toString())

n1 = fromArray([9, 9, 9])
n2 = fromArray([1])
expected = fromArray([0, 0, 0, 1])
sumList(n2, n1)
n2.toString().should.equal(expected.toString())