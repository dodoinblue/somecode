// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
function zeroMatrix(matrix) {
  zeroPrositions = []
  let row = matrix.length
  let col = matrix[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        zeroPrositions.push([i, j])
      }
    }
  }
  for (let pos of zeroPrositions) {
    let x = pos[0]
    let y = pos[1]
    for (let i = 0; i < row; i++) {
      matrix[i][y] = 0
    }
    for (let i = 0; i < col; i++) {
      matrix[x][i] = 0
    }
  }
}

const should = require('chai').should()
let origin1 = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]
let expect1 = [
  [1, 0, 3],
  [0, 0, 0],
  [7, 0, 9]
]
zeroMatrix(origin1)
origin1.should.deep.equal(expect1)

let origin2 = [
  [3, 7, 8, 0, 3],
  [1, 5, 7, 5, 8],
  [1, 5, 8, 0, 6],
  [6, 9, 3, 0, 2],
  [9, 7, 3, 2, 3]
]
let expect2 = [
  [0, 0, 0, 0, 0],
  [1, 5, 7, 0, 8],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [9, 7, 3, 0, 3]
]
zeroMatrix(origin2)
origin2.should.deep.equal(expect2)

let origin3 = [
  [3, 0, 8, 0],
  [1, 5, 7, 5],
  [1, 5, 8, 0],
  [6, 9, 3, 0]
]
let expect3 = [
  [0, 0, 0, 0],
  [1, 0, 7, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
zeroMatrix(origin3)
origin3.should.deep.equal(expect3)