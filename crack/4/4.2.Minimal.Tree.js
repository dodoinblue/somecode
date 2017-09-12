// Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height
let BinaryTreeNode = require('./BinaryTreeNode')

function generateBST(ascendingArray) {
  if (ascendingArray.length === 1) {
    return new BinaryTreeNode(ascendingArray[0])
  } else if (ascendingArray.length === 0) {
    return
  }
  let splitPos = Math.floor(ascendingArray.length / 2)
  let node = new BinaryTreeNode(ascendingArray[splitPos])
  node.left = generateBST(ascendingArray.slice(0, splitPos))
  node.right = generateBST(ascendingArray.slice(splitPos + 1))
  return node
}

const should = require('chai').should()

let array = [1,2,3,4,5]
let root = generateBST(array)

root.data.should.equal(3)
root.left.data.should.equal(2)
root.right.data.should.equal(5)
root.left.left.data.should.equal(1)
root.right.left.data.should.equal(4)
should.equal(typeof root.left.right, 'undefined')
should.equal(typeof root.right.right, 'undefined')

let array2 = [1,2,3,4,5,6]
let root2 = generateBST(array2)

root2.data.should.equal(4)
root2.left.data.should.equal(2)
root2.left.left.data.should.equal(1)
root2.left.right.data.should.equal(3)
root2.right.data.should.equal(6)
root2.right.left.data.should.equal(5)
should.equal(typeof root2.right.right, 'undefined')

module.exports = generateBST