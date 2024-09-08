// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

function strStr(haystack: string, needle: string): number {
  function checker(fromIndex: number) {
    for (let i = 0; i < needle.length; i++) {
      if (haystack[fromIndex + i] !== needle[i]) {
        return false
      }
    }

    return true
  }

  for (let i = 0; i < haystack.length; i++) {
    if (checker(i)) { return i }
  }

  return -1
};

console.log(strStr('madbutsad', 'sad'))
