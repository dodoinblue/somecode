// Implement a MyQueue class which implements a queue using two stacks
function MyQueue() {
  this.old = []
  this.new = []
}

MyQueue.prototype.add = function(obj) {
  this.new.push(obj)
}

MyQueue.prototype.shiftStacks = function() {
  if (this.old.length === 0) {
    while(this.new.length !== 0) {
      this.old.push(this.new.pop())
    }
  }
}

MyQueue.prototype.peek = function() {
  this.shiftStacks()
  return this.old[this.old.length - 1]
}

MyQueue.prototype.remove = function() {
  this.shiftStacks()
  return this.old.pop()
}

const should = require('chai').should()

let q = new MyQueue()

q.add(0)
q.add(1)
q.add(2)
q.peek().should.equal(0)
q.add(3)
q.peek().should.equal(0)
q.remove().should.equal(0)
q.remove().should.equal(1)
q.remove().should.equal(2)
q.remove().should.equal(3)
should.equal(typeof q.remove(), 'undefined')