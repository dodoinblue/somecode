// Implement a function to check if a binary tree is a binary search tree

// Wrong solution
function isBST(root) {
  function hasChild(node) {
    if (!node) {
      return false
    }
    let result = typeof node.left !== 'undefined' || typeof node.right !== 'undefined'
    return result
  }
  if (!hasChild(root)) {
    return true
  }
  if (root.left && root.left.data <= root.data) {
    let leftR = isBST(root.left)
    return leftR
  } else if (root.right && root.right.data > root.data) {
    let rightR = isBST(root.right)
    return rightR
  } else {
    return false
  }
}

// Official solution
function checkBST(root) {
  let lastPrinted
  function check(root) {
    if (typeof root === 'undefined') {
      return true
    }
    // Check recursive left
    if (!check(root.left)) return false
    // Check current
    if (typeof lastPrinted !== 'undefined' && root.data <= lastPrinted) {
      return false
    }
    lastPrinted = root.data

    // Check recursive right
    if (!check(root.right)) return false
    
    return true // all good
  }
  return check(root)
}

// Additional structure solution
function checkBST2(root) {
  let array = []
  let index = 0
  // Helper function
  function copyBST(root, array) {
    if (typeof root === 'undefined') return
    copyBST(root.left, array)
    array[index] = root.data
    index++
    copyBST(root.right, array)
  }

  copyBST(root, array)

  // Check
  console.log(array)
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1]) return false;
  }
  return true
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

isBST(n0).should.equal(false)
checkBST(n0).should.equal(false)
checkBST2(n0).should.equal(false)

const generateBST = require('./4.2.Minimal.Tree')
let tree = generateBST([1, 2, 3, 4, 5, 6])
//      4
//    /   \
//   2     6
//  / \   /
// 1   3 5

isBST(tree).should.equal(true)
checkBST(tree).should.equal(true)
checkBST2(tree).should.equal(true)

tree.left.left.data = 2
checkBST(tree).should.equal(true)
checkBST2(tree).should.equal(true)

tree.left.right.data = 9
isBST(tree).should.equal(false)
checkBST(tree).should.equal(false)
checkBST2(tree).should.equal(false)

