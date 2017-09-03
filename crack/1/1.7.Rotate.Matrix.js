function rotate(array) {
  let N = array.length
  for (let i = 0; i < Math.floor(N / 2); i++) {
    for (let j = i; j < N - 1 - i; j++) {
      let temp = array[i][j]
      array[i][j] = array[N - 1 - j][i]
      array[N - 1 - j][i] = array[N - 1 - i][N - 1 - j]
      array[N - 1 - i][N - 1 - j] = array[j][N - 1 - i]
      array[j][N - 1 - i] = temp
    }
  }
}

const should = require('chai').should()
let origin1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let expect1 = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
rotate(origin1)
origin1.should.deep.equal(expect1)

let origin2 = [
  [3, 7, 8, 0, 3],
  [1, 5, 7, 5, 8],
  [1, 5, 8, 0, 6],
  [6, 9, 3, 0, 2],
  [9, 7, 3, 2, 3]
]
let expect2 = [
  [9, 6, 1, 1, 3],
  [7, 9, 5, 5, 7],
  [3, 3, 8, 7, 8],
  [2, 0, 0, 5, 0],
  [3, 2, 6, 8, 3]
]
rotate(origin2)
origin2.should.deep.equal(expect2)

let origin3 = [
  [3, 7, 8, 0],
  [1, 5, 7, 5],
  [1, 5, 8, 0],
  [6, 9, 3, 0]
]
let expect3 = [
  [6, 1, 1, 3],
  [9, 5, 5, 7],
  [3, 8, 7, 8],
  [0, 0, 5, 0]
]
rotate(origin3)
origin3.should.deep.equal(expect3)