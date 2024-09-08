function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) { return [] }

  const ary = []

  let interval: number[] = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i]

    if (value - interval[interval.length - 1] > 1) {
      ary.push(format(interval))
      interval = [value]
      continue
    }

    interval.push(value)
  }

  if (interval.length !== 0) { ary.push(format(interval)) }

  return ary
}

const format = (ary: number[]): string => {
  console.log('ary to format', ary)
  return (ary.length > 1) ? `${ary[0]}->${ary[ary.length - 1]}` : `${ary[0]}`
}

// console.log(summaryRanges([0,1,2,4,5,7]))

// function summaryRanges(nums: number[]): string[] {
//   let range = Infinity

//   // Defining the smallest range
//   for (let i = 1; i < nums.length; i++) {
//     const newRange = nums[i] - nums[i - 1]
//     if (newRange < range) { range = newRange }
//   }

//   console.log('range: ', range)

//   // defining an array
//   const ary = []
//   let interval = []
//   for (let i = 0; i < nums.length; i++) {
//     console.log('')
//     console.log(`--- ${i}`)
//     console.log(`value: ${nums[i]}`)
//     console.log('interval is', interval)
//     if (interval.length === 0) {
//       interval.push(nums[i])
//       continue
//     }

//     if (nums[i] - interval[0] <= range) {
//       continue
//     }

//     ary.push(format(interval))
//     interval = []
//   }

//   if (interval.length !== 0) { ary.push(format(interval)) }

//   return ary
// };
