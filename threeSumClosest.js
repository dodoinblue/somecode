/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => {
    return a - b
  })
  let smallestDiff
  let sumWhenClosest
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      let diff = sum - target
      if (typeof smallestDiff === 'undefined') {
        smallestDiff = Math.abs(diff)
        sumWhenClosest = sum
        continue
      } else if (Math.abs(diff) < smallestDiff) {
        smallestDiff = Math.abs(diff)
        sumWhenClosest = sum
      }

      if (diff < 0) {
        j++
      } else if (diff > 0) {
        k--
      } else {
        return target
      }
    }

  }
  return sumWhenClosest
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))