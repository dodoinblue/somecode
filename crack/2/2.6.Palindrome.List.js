// Write a function to check if a linked list is a palindrome
function palindromeList(list) {
  let array = []
  while (list) {
    array.push(list)
    list = list.next
  }
  let i = 0, j = array.length - 1
  while(i < j) {
    if (array[i].data !== array[j].data) {
      return false
    }
    i++
    j--
  }
  return true
} // T: O(N), S: O(N)

// Reverse approch T: O(N), S: O(N)
// Stack approch T: O(N), S: O(N)
// Recursive T: O(N^2), S: O(1)?

const should = require('chai').should()
let fromArray = require('./Utils').fromArray

let list = fromArray(Array.from('asdfdsa'))
palindromeList(list).should.equal(true)
list = fromArray(Array.from('asddsa'))
palindromeList(list).should.equal(true)
list = fromArray(Array.from('asd12dsa'))
palindromeList(list).should.equal(false)
