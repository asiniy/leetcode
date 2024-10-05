// https://leetcode.com/problems/move-zeroes

function moveZeroes(nums: number[]): void {
  let targetIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== targetIndex) {
        nums[targetIndex] = nums[i]
        nums[i] = 0
      }

      targetIndex++
    }
  }
}

// Too slow! Let's refactor that making it N+1
// function moveZeroes(nums: number[]): void {
//   let l: number = 0
//   let r: number = 0

//   while (l < nums.length) {
//     if (nums[l] === 0) {
//       r = l

//       while (nums[r] === 0) {
//         r++
//         if (r >= nums.length) { return }
//       }

//       nums[l] = nums[r]
//       nums[r] = 0
//     }

//     l++
//   }
// }

const ary = [0, 1, 0, 3, 12]
moveZeroes(ary) // Should return [1, 3, 12, 0, 0]
console.log(ary)
