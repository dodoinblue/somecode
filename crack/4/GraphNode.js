function GraphNode(value) {
  let data = value
  let linkedTo = []

  this.getData = function() {
    return data
  }

  this.getLinkedNodes = function() {
    return linkedTo
  }

  this.addLinkedNode = function(node) {
    linkedTo.push(node)
  }
}

module.exports = GraphNode