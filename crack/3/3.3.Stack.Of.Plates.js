// Implement a data structure SetOfStacks that starts a new stack when the previous stack exceeds some threshold.
function SetOfStacks(limit) {
  this.map = new Map()
  this.map.set(0, [])
  this.limit = limit
}

SetOfStacks.prototype.getCurrent = function() {
  return this.map.get(this.map.size - 1)
}

SetOfStacks.prototype.push = function(obj) {
  if (this.getCurrent().length === this.limit) {
    this.map.set(this.map.size, [obj])
  } else {
    this.getCurrent().push(obj)
  }
}

SetOfStacks.prototype.pop = function() {
  let popped = this.getCurrent().pop()
  if (this.getCurrent().length === 0) {
    this.map.delete(this.map.size - 1)
  }
  return popped
}

SetOfStacks.prototype.popAt = function(id) {
  let stackAtId = this.map.get(id)
  if (typeof stackAtId === 'undefined' || stackAtId.length === 0) throw new Error('Stack overflow')
  return stackAtId.pop()
}

const should = require('chai').should()

let stack = new SetOfStacks(3)
stack.push(1)
stack.push(2)
stack.map.size.should.equal(1)
stack.map.get(0).should.deep.equal([1, 2])
stack.push(3)
stack.push(4)
stack.map.size.should.equal(2)
stack.map.get(0).should.deep.equal([1, 2, 3])
stack.map.get(1).should.deep.equal([4])
stack.pop().should.equal(4)
stack.map.size.should.equal(1)
stack.map.get(0).should.deep.equal([1, 2, 3])
should.equal(typeof stack.map.get(1), 'undefined')
stack.push(4)
stack.popAt(0).should.equal(3)
stack.map.get(0).should.deep.equal([1, 2])
stack.map.get(1).should.deep.equal([4])
stack.pop().should.equal(4)
stack.pop().should.equal(2)