// An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out"
// basis. People must adopt either the "oldest" (based on arrival time) of all animals at the
// shelter, or they can select whether they would prefer a dog or a cat. They cannot select which
// specific anima. Create a data structure to maitain this system, and implement operations such
// as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure.
let LinkedNode = require('../2/LinkedNode')
function AnimalShelter() {
  let allQ, allTail
  let dogQ, dogQTail
  let catQ, catQTail

  function addToQueue(item, queue, tail) {
    if (typeof queue === 'undefined') {
      queue = new LinkedNode(item)
      tail = queue
    } else {
      tail.next = new LinkedNode(item)
      tail = tail.next
    }
    return [queue, tail]
  }

  this.enqueue = function(animal) {
    [allQ, allTail] = addToQueue(animal, allQ, allTail)

    if (animal.type === 'cat') {
      [catQ, catQTail] = addToQueue(animal, catQ, catQTail)
    } else {
      [dogQ, dogQTail] = addToQueue(animal, dogQ, dogQTail)
    }
  }

  this.dequeueAny = function() {
    let animal = allQ.data
    allQ = allQ.next
    if (animal.type === 'cat') {
      catQ = catQ.next
    } else {
      dogQ = dogQ.next
    }
    return animal
  }

  this.dequeueDog = function() {
    let dog = dogQ.data
    allQ = deleteItem(allQ, dogQ)
    dogQ = dogQ.next
    return dog
  }

  this.dequeueCat = function() {
    let cat = catQ.data
    allQ = deleteItem(allQ, catQ)
    catQ = catQ.next
    return cat
  }

  this.getAll = function() {
    let p = allQ
    let output = []
    while(p) {
      output.push(p.data.name)
      p = p.next
    }
    return output.join(' -> ')
  }

  this.getDogs = function() {
    let p = dogQ
    let output = []
    while(p) {
      output.push(p.data.name)
      p = p.next
    }
    return output.join(' -> ')
  }

  this.getCats = function() {
    let p = catQ
    let output = []
    while(p) {
      output.push(p.data.name)
      p = p.next
    }
    return output.join(' -> ')
  }

  function deleteItem(from, node) {
    let p = from
    if (p.data.name === node.data.name) return p.next
    while(p) {
      if (typeof p.next !== 'undefined' && p.next.data === node.data) {
        p.next = p.next.next
        break
      }
      p = p.next
    }
    return from
  }
}

const should = require('chai').should()

let shelter = new AnimalShelter()

shelter.enqueue({type: 'dog', name: 'Sparky'})
shelter.enqueue({type: 'dog', name: 'Snoopy'})
shelter.enqueue({type: 'cat', name: 'Caffrey'})
shelter.enqueue({type: 'cat', name: 'Meow'})
shelter.enqueue({type: 'cat', name: 'Meatball'})
shelter.enqueue({type: 'dog', name: 'Doughnut'})

shelter.getAll().should.equal('Sparky -> Snoopy -> Caffrey -> Meow -> Meatball -> Doughnut')
shelter.getDogs().should.equal('Sparky -> Snoopy -> Doughnut')
shelter.getCats().should.equal('Caffrey -> Meow -> Meatball')
shelter.dequeueAny().should.deep.equal({type: 'dog', name: 'Sparky'})
shelter.getDogs().should.equal('Snoopy -> Doughnut')
shelter.getAll().should.equal('Snoopy -> Caffrey -> Meow -> Meatball -> Doughnut')
shelter.dequeueCat().should.deep.equal({type: 'cat', name: 'Caffrey'})
shelter.getAll().should.equal('Snoopy -> Meow -> Meatball -> Doughnut')
shelter.getDogs().should.equal('Snoopy -> Doughnut')
shelter.getCats().should.equal('Meow -> Meatball')
