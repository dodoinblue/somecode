// Delete a node in the middle of a singly linked list, given only access to that node
// Input: a -> b -> c -> d -> e, deleteNode(c)
// Replace in place: a -> b -> d -> e
function deleteNode(node) {
  while(node) {
    if (node.next) {
      node.data = node.next.data
      if (! node.next.next) {
        delete node.next
      }
    }
    node = node.next
  }
}

const should = require('chai').should()
let LinkedNode = require('./LinkedNode')

let NodeA = new LinkedNode('a')
let NodeB = new LinkedNode('b')
NodeA.next = NodeB
let NodeC = new LinkedNode('c')
NodeB.next = NodeC
let NodeD = new LinkedNode('d')
NodeC.next = NodeD
let NodeE = new LinkedNode('e')
NodeD.next = NodeE
let NodeF = new LinkedNode('f')
NodeE.next = NodeF

deleteNode(NodeC)
NodeA.toString().should.equal('a -> b -> d -> e -> f')