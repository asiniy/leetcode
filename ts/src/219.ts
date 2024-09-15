// https://leetcode.com/problems/contains-duplicate-ii

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    // console.log('')
    // console.log(`i: ${i}`)
    set.add(nums[i-1])
    set.delete(nums[i-k-1])
    // console.log(`set: ${[...set].join(',')}`)

    if (set.has(nums[i])) {
      return true
    }
  }

  return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
