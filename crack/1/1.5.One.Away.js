// There are 3 types of edit can be performed on strings: insert / replace / remove
// a character. Give 2 strings, check if they are one edit away
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bae -> false
function oneAway(str1, str2) {
  let insertion = 0
  let replace = 0
  let shortString, longString
  if (str1.length > str2.length) {
    shortString = str2
    longString = str1
  } else {
    shortString = str1
    longString = str2
  }
  for (let i = 0; i < longString.length; i++) {
    if (longString[i + insertion] !== shortString[i]) {
      debugger
      if (longString[i + insertion + 1] === shortString[i]) {
        insertion++
      } else if (longString[i + insertion + 1] === shortString[i + 1]) {
        replace++
      } else {
        return false
      }
      if (insertion + replace > 1) {
        return false
      }
    }
  }
  return true
}

const should = require('chai').should()
oneAway('pale', 'ple').should.equal(true)
oneAway('pales', 'pale').should.equal(true)
oneAway('pale', 'bale').should.equal(true)
oneAway('pale', 'bae').should.equal(false)
oneAway('bae', 'pale').should.equal(false)
oneAway('pale', 'paleasdsf').should.equal(false)