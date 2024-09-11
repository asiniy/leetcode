// function singleNumber(nums: number[]): number {
//   const s = new Set<number>()

//   for (let i = 0; i < nums.length; i++) {
//     if (s.has(nums[i])) {
//       s.delete(nums[i])
//     } else {
//       s.add(nums[i])
//     }
//   }

//   for (let v of s) {
//     return v
//   }
// };

console.log(singleNumber([2,1,2]))

// It's faster to do it using bitwise XOR like this:
function singleNumber(nums: number[]): number {
  let xor = 0
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i]
  }
  return xor
}
