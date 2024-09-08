// https://leetcode.com/problems/search-insert-position

function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  if (target > nums[right]) {
    return right + 1
  } else if (target <= nums[left]) {
    return 0
  }

  while(true) {
    if (right - left === 1) {
      return right
    }

    const middle = Math.ceil((right + left) / 2)

    const value = nums[middle]
    if (value === target) {
      return middle
    } else if (value > target) {
      right = middle
    } else {
      left = middle
    }
  }
};

// console.log(searchInsert([1], 0))
