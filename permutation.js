var permutation = function(str, prefix) {
  if (str.length === 0) {
    console.log(prefix)
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.slice(0, i) + str.slice(i + 1)
      permutation(rem, str[i])
    }
  }
}

permutation('abc', '')