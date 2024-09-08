// https://leetcode.com/problems/word-pattern

function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')

  if (words.length !== pattern.length) { return false }

  const charsObject = {}
  const wordsObject = {}

  for (let i = 0; i < words.length; i++) {
    const char = pattern[i]
    const word = words[i]

    if (!charsObject.hasOwnProperty(char) && !wordsObject.hasOwnProperty(word)) {
      charsObject[char] = word
      wordsObject[word] = char
      continue
    }

    if (charsObject[char] === word && wordsObject[word] === char) {
      continue
    }

    return false
  }

  return true
};

console.log(wordPattern('abca', 'dog cat cat dog'))
