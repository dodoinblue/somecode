// Implement a string compression function based on word count. E.g. aabcccccaaa -> a2b1c5a3.
// If compressed string is not shorter, return original string. Assume (A-Za-z)
function compress(str) {
  let saved = 0
  let i = 0
  let compressedArray = []

  while (str[i]) {
    let counter = 1
    saved--
    while (str[i + counter] && str[i + counter] === str[i]) {
      counter++
      saved++
    }
    compressedArray.push(str[i])
    compressedArray.push(counter)
    i = i + counter
  }
  if (saved > 0) return compressedArray.join('')
  else return str
}

const should = require('chai').should()
compress('aabcccccaaa').should.equal('a2b1c5a3')