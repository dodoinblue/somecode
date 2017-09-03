// Given two strings, write a method to decide if one is a permutation of the other
function crackPermutation(str1, str2) {
  if (str1.length !== str2.length) return false

  let flags = new Array()
  for (let i = 0; i < 128; i++) {
    flags.push(0)
  }
  for (let i = 0; i < str1.length; i++) {
    flags[str1.charCodeAt(i)]++
  }
  for (let i = 0; i < str2.length; i++) {
    flags[str2.charCodeAt(i)]--
    if (flags[str2.charCodeAt(i)] < 0) {
      return false
    }
  }
  return true
}

function crackPermutation2(str1, str2) {
  function sort(str) {
    return Array.from(str).sort().join('')
  }
  return sort(str1) === sort(str2)
}

function crackPermutation3(str1, str2) {
  
}

var should = require('chai').should()
var _ = require('lodash')
let source = _.range(1000)
let shuffled = _.shuffle(source)

crackPermutation('12c4', '4c21').should.equal(true)
crackPermutation('1234', '432x').should.equal(false)
var t1 = Date.now()
crackPermutation(source.join(''), shuffled.join('')).should.equal(true)
var t2 = Date.now()
console.log(`time used: ${t2 - t1} ms`)

crackPermutation2('12c4', '4c21').should.equal(true)
crackPermutation2('1234', '432x').should.equal(false)
var t1 = Date.now()
crackPermutation2(source.join(''), shuffled.join('')).should.equal(true)
var t2 = Date.now()
console.log(`time used: ${t2 - t1} ms`)
