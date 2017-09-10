// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure. The stack supports the following operations:
// pop, push, peek, and isEmpty
function sortStack(stack) {
  // TODO: null check
  let tempStack = new Stack()
  let pushed = 0
  while(typeof stack.peek() !== 'undefined') {
    let tempValue = stack.pop()
    console.log(`putting ${tempValue} to a correct location in ${tempStack.toArray()}`)
    if (typeof tempStack.peek() === 'undefined') {
      tempStack.push(tempValue)
    } else {
      while(typeof tempStack.peek() !== 'undefined' && tempStack.peek() > tempValue) {
        console.log(`pushing ${tempStack.peek()} back to stack`)
        stack.push(tempStack.pop())
        pushed++
      }
      tempStack.push(tempValue)
      while(pushed > 0) {
        let v = stack.pop()
        console.log(`pushing ${v} back to tempStack`)
        tempStack.push(v)
        pushed--
      }
    }
  }
  while(typeof tempStack.peek() !== 'undefined') {
    stack.push(tempStack.pop())
  }
  return stack
}

function Stack() {
  let array = []
  this.pop = function() {
    return array.pop()
  }
  this.push = function(item) {
    return array.push(item)
  }
  this.peek = function() {
    return array[array.length - 1]
  }
  this.isEmpty = function() {
    return array.length === 0
  }
  this.fromArray = function(arr) {
    array = arr
  }
  this.toArray = function() {
    return array
  }
}

const should = require('chai').should()

let s = new Stack()
s.fromArray([5, 6, 3, 4, 1, 0])

sortStack(s).toArray().should.deep.equal([6, 5, 4, 3, 1, 0])

s.fromArray([0, 1, 4, 3, 6, 5])
sortStack(s).toArray().should.deep.equal([6, 5, 4, 3, 1, 0])

s.fromArray([0, 1, 3, 3, 6, 5])
sortStack(s).toArray().should.deep.equal([6, 5, 3, 3, 1, 0])
