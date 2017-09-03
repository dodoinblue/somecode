function LinkedNode(data) {
  this.data = data
}

LinkedNode.prototype.toString = function() {
  let array = []
  let pointer = this
  while(pointer) {
    array.push(pointer.data)
    pointer = pointer.next
  }
  return array.join(' -> ')
}

module.exports = LinkedNode