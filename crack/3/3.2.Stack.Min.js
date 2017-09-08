// Design a stack, in addition to push and pop, has a function min which returns the minimum element.
// Push, pop, and min should all operate in O(1) time
function StackMin() {
  this.stack = []
  this.minStack = []
}

StackMin.prototype.push = function (value) {
  if (typeof this.min() === 'undefined' || value <= this.min()) {
    this.minStack.push(value)
  }
  this.stack.push(value)
}

StackMin.prototype.min = function() {
  return this.minStack[this.minStack.length - 1]
}

StackMin.prototype.pop = function() {
  let popped = this.stack.pop()
  if (popped <= this.min()) {
    this.minStack.pop()
  }
  return popped
}

const should = require('chai').should()

let stack = new StackMin()
should.equal(typeof stack.min(), 'undefined')
stack.push(-1)
stack.push(1)
stack.stack.should.deep.equal([-1, 1])
stack.min().should.equal(-1)
stack.push(-3)
stack.stack.should.deep.equal([-1, 1, -3])
stack.min().should.equal(-3)
stack.pop().should.equal(-3)
stack.min().should.equal(-1)
stack.pop().should.equal(1)
stack.min().should.equal(-1)
stack.pop().should.equal(-1)
should.equal(typeof stack.min(), 'undefined')
stack.stack.should.deep.equal([])
