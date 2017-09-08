// Use an array to implement 3 stacks
function ThreeStacks(length) {
  this.length = length
  this.array = new Array(length * 3)
  this.pointers = [0, 0, 0]
}

ThreeStacks.prototype.push = function (id, item) {
  if (this.pointers[id] === this.length) throw new Error('Stack overflow')
  this.array[this.length * id + this.pointers[id]] = item
  this.pointers[id]++
}

ThreeStacks.prototype.pop = function (id) {
  let obj = this.array[this.length * id + this.pointers[id] - 1]
  this.array[this.length * id + this.pointers[id] - 1] = undefined
  this.pointers[id]--
  return obj
}

ThreeStacks.prototype.peek = function (id) {
  return this.array[this.length * id + this.pointers[id] - 1]
}

const should = require('chai').should()

let stack = new ThreeStacks(3)

stack.push(0, 1)
stack.push(1, 1)
stack.push(1, 2)

let expect1 = new Array(9)
expect1[0] = 1
expect1[3] = 1
expect1[4] = 2
stack.array.should.deep.equal(expect1)

should.equal(typeof stack.peek(2), 'undefined')
should.equal(stack.peek(1), 2)
should.equal(stack.pop(1), 2)
should.equal(stack.peek(1), 1)
should.equal(stack.peek(0), 1)

let expect2 = new Array(9)
expect2[0] = 1
expect2[3] = 1
stack.array.should.deep.equal(expect2)

// Flexible stack solution...
