// https://leetcode.com/problems/merge-sorted-array

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums3 = new Array(m)

  // nums1 to nums3
  for (let n3 = 0; n3 < m; n3++) {
    nums3[n3] = nums1[n3]
  }

  let i = 0
  let j = 0

  while (i < m || j < n) {
    const index = i + j
    // console.log()
    // console.log('---')
    // console.log(`index: ${index}, i: ${i}, j: ${j}`)
    // console.log(`i >= m`, i>=m)
    // console.log(`j >= n`, j>=n)

    if (i >= m) {
      nums1[index] = nums2[j]
      j++
      continue
    }

    if (j >= n) {
      nums1[index] = nums3[i]
      i++
      continue
    }

    if (nums2[j] >= nums3[i]) {
      nums1[index] = nums3[i]
      i++
    } else {
      nums1[index] = nums2[j]
      j++
    }
  }

  console.log('nums1 is ', nums1)
}

// merge([1,2,3,0,0,0], 3, [2,5,6], 3)
// merge([1], 1, [], 0)
merge([4,5,6,0,0,0], 3, [1,2,3], 3)
