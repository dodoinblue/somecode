// Given a directed graph, design an algorithm to find out whether there is a route between tow nodes
let GraphNode = require('./GraphNode')

function search(node1, node2) {
  let Q = []
  Q.push(node1)
  while(Q.length > 0) {
    let node = Q.shift()
    if (node === node2) {
      return true
    }
    node.visited = true
    for (let n of node.getLinkedNodes()) {
      if (!n.visited) {
        Q.push(n)
      }
    }
  }
  return false
}

var should = require('chai').should()

let n0 = new GraphNode(0)
let n1 = new GraphNode(1)
let n2 = new GraphNode(2)
let n3 = new GraphNode(3)
let n4 = new GraphNode(4)
let n5 = new GraphNode(5)
let n6 = new GraphNode(6)
let n7 = new GraphNode(7)
let n8 = new GraphNode(8)
let n100 = new GraphNode(100)

n0.addLinkedNode(n1)
n0.addLinkedNode(n2)
n0.addLinkedNode(n3)
n1.addLinkedNode(n4)
n1.addLinkedNode(n5)
n2.addLinkedNode(n5)
n3.addLinkedNode(n6)
n6.addLinkedNode(n5)
n6.addLinkedNode(n7)
n6.addLinkedNode(n8)
n6.addLinkedNode(n5)
n8.addLinkedNode(n4)

search(n0, n7).should.equal(true)
search(n0, n100).should.equal(false)
search(n5, n8).should.equal(false)

