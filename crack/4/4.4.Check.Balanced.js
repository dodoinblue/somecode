// Implement a function to check if a binary tree is balanced.
function isBalanced(root) {
  function hasChild(node) {
    if (!node) {
      return false
    }
    let result = typeof node.left !== 'undefined' || typeof node.right !== 'undefined'
    return result
  }

  if (!hasChild(root)) {
    return true
  } else if (!root.right || !root.left) {
    if (root.right) {
      let rightR = !hasChild(root.right)
      return rightR
    } else {
      let leftR = !hasChild(root.left)
      return leftR
    }
  } else if (hasChild(root.left) && hasChild(root.right)) {
    let r = isBalanced(root.left) && isBalanced(root.right)
    return r
  } else if (!hasChild(root.left) && !hasChild(root.right)) {
    return true
  } else {
    return false
  }
}

const should = require('chai').should()
const TreeNode = require('./BinaryTreeNode')

let n0 = new TreeNode(0)
let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
let n4 = new TreeNode(4)
let n5 = new TreeNode(5)
let n6 = new TreeNode(6)

n0.left = n1
n0.right = n2
n1.left = n3
n2.left = n4
n2.right = n5
n5.left = n6

isBalanced(n0).should.equal(false)
isBalanced(n1).should.equal(true)

const generateBST = require('./4.2.Minimal.Tree')
let tree = generateBST([1, 2, 3, 4, 5, 6])
isBalanced(tree).should.equal(true)