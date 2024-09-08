// https://leetcode.com/problems/longest-common-prefix

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) { return strs[0] }

  let common = []

  let n = 0

  while (true) {
    const letter = strs[0][n]

    for (let i = 1; i < strs.length; i++) {
      if (!strs[i][n] || strs[i][n] !== letter) {
        console.log('---')
        return common.join('')
      }
    }

    common.push(letter)
    n += 1
  }
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(['','']))
