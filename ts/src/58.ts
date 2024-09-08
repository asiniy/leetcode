// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
  let index: number = s.length - 1
  let wordStarted: boolean = false
  let n: number = 0

  while (true) {
    const char = s[index]

    if (index < 0) { return n }

    if (char === ' ' && wordStarted === true) {
      return n
    }

    if (char !== ' ' && wordStarted === false) {
      wordStarted = true
    }

    if (char !== ' ') {
      n += 1
    }

    index -= 1
  }
};

console.log(lengthOfLastWord('a'))
