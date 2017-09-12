// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
// E.g. If you have a tree with Depth D, you'll have D linked lists
function listOfDepths(root, currentDepth, lists) {
  if (typeof lists === 'undefined') {
    lists = []
  }
  if (typeof currentDepth === 'undefined') {
    currentDepth = 0
  }
  if (typeof root === 'undefined') {
    return
  }
  if (typeof lists[currentDepth] === 'undefined') {
    lists[currentDepth] = []
  }
  lists[currentDepth].push(root)
  currentDepth++
  listOfDepths(root.left, currentDepth, lists)
  listOfDepths(root.right, currentDepth, lists)
  return lists
}

const should = require('chai').should()
const generateBST = require('./4.2.Minimal.Tree')

let tree = generateBST([1, 2, 3, 4, 5, 6])
let lists = listOfDepths(tree, 0, [])

lists.length.should.equal(3)
lists[0].length.should.equal(1)
lists[0][0].data.should.equal(4)

lists[1].length.should.equal(2)
lists[1][0].data.should.equal(2)
lists[1][1].data.should.equal(6)

lists[2].length.should.equal(3)
lists[2][0].data.should.equal(1)
lists[2][1].data.should.equal(3)
lists[2][2].data.should.equal(5)