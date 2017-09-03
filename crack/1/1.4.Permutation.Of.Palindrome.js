/* 
 * Check if a string is a permutation of a palindrome
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc)
 */
function isPermutationOfPalindrome(str) {
  let a = Array.from(str.toLowerCase()).sort() // O(NlogN)
  let single = 0
  debugger;
  while (a.length > 0) {
    let c = a.pop()
    if (a.length === 0 || c !== a[a.length - 1]) {
      single ++
      if (single > 1) return false
    } else {
      a.pop()
    }
  }
  return true
}

// O(n)
function isPermutationOfPalindrome2(str) {
  // Asume english charactors
  let counters = []
  for (let i = 0; i < 128; i++) {
    counters.push(0)
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    counters[char.charCodeAt()]++
  }
  let single = 0
  for (let i = 0; i < 128; i++) {
    if (counters[i] % 2 !== 0) {
      single++
      if (single > 1) {
        return false
      }
    }
  }
  return true
}

const should = require('chai').should()
isPermutationOfPalindrome('TactCoa').should.equal(true)
isPermutationOfPalindrome('1234').should.equal(false)
isPermutationOfPalindrome('xyzzabebazzyx').should.equal(true)

isPermutationOfPalindrome2('TactCoa').should.equal(true)
isPermutationOfPalindrome2('1234').should.equal(false)
isPermutationOfPalindrome2('xyzzabebazzyx').should.equal(true)