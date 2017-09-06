let LinkedNode = require('./LinkedNode')

let fromArray = function(array) {
  let node, tail
  for (let item of array) {
    if (typeof node === 'undefined') {
      node = tail = new LinkedNode(item)
    } else {
      tail.next = new LinkedNode(item)
      tail = tail.next
    }
  }
  return node
}

module.exports = {
  fromArray
}