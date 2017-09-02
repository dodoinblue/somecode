// Implement an algorithm to determine if a string has all unique characters
function isUnique(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

function isUniqueWithCache(str) {
  let set = new Set()
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false
    } else {
      set.add(str[i])
    }
  }
  return true
}

var should = require('chai').should()

isUnique('1234567890').should.equal(true)
isUnique('1231').should.equal(false)
isUnique('this string is not unique').should.equal(false)

isUniqueWithCache('1234567890').should.equal(true)
isUniqueWithCache('1231').should.equal(false)
isUniqueWithCache('this string is not unique').should.equal(false)