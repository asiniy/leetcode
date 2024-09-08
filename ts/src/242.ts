// https://leetcode.com/problems/valid-anagram

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) { return false }

  function countChars(word) {
    const object = {}
    word.split('').forEach((letter) => {
      if (object.hasOwnProperty(letter)) {
        object[letter] += 1
      } else {
        object[letter] = 1
      }
    })
    return object
  }

  const sChars = countChars(s)
  const tChars = countChars(t)

  const keysCondition = (Object.keys(sChars).length === Object.keys(tChars).length)
  const valuesCondition = Object.keys(sChars).every((key) => sChars[key] === tChars[key])

  // console.log('---')
  // console.log(keysCondition)
  // console.log(valuesCondition)
  // console.log(sChars)
  // console.log(tChars)

  return keysCondition && valuesCondition
};

console.log(isAnagram('anagram', 'nagaram'))
