var sort = function(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

let input = [5,67,234,435,6,7,545,2,568,567,45,34,656,78,536,6,3,734,454,56,546,45,345,634,56]
console.log(sort(input))