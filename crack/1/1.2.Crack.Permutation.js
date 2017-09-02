// Given two strings, write a method to decide if one is a permutation of the other
function crackPermutation(str1, str2) {
  if (str1.length !== str2.length) return false

  for (let i = 0; i < str1.length; i++) {
    let remain = str1.slice(0, i) + str1.slice(i + 1)
    let variable = str1[i]

    for (let j = 0; j < remain.length; i++) {
      let assembled = remain.slice(0, j) + variable + remain.slice(j)
      if (assembled === str2) {
        return true
      }
    }
  }
}

function crackPermutation2(str1, str2) {
  function sort(str) {
    return Array.from(str).sort().join('')
  }
  return sort(str1) === sort(str2)
}

var should = require('chai').should()
var _ = require('lodash')
let source = _.range(10000)
let shuffled = _.shuffle(source)
crackPermutation('12c4', '4c21').should.equal(true)
crackPermutation('1234', '432x').should.equal(false)
crackPermutation(source.join(''), shuffled.join('')).should.equal(true)

crackPermutation2('12c4', '4c21').should.equal(true)
crackPermutation2('1234', '432x').should.equal(false)
crackPermutation2(source.join(''), shuffled.join('')).should.equal(true)