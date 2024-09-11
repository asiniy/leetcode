function majorityElement(nums: number[]): number {
  const o = {}

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    o[number] ||= 0
    o[number] += 1
    if (o[number] > nums.length / 2) { return number }
  }
};

console.log(majorityElement([3,2,3]))
