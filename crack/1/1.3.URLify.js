/* A method to replace all spaces in a string with '%20'. You may assume that the string has
 * sufficient space at the end to hold the additional characters, and you are given the true
 * lenth of the string.
 * Input: "Mr John Smith    ", 13
 * Output: "Mr%20John%20Smith"
 */
function URLify(str, realLength) {
  let array = []
  for (let i = 0; i < realLength; i++) {
    if (str[i] === ' ') {
      array.push('%20')
    } else {
      array.push(str[i])
    }
  }
  return array.join('')
}

var should = require('chai').should()

URLify("Mr John Smith    ", 13).should.equal("Mr%20John%20Smith")