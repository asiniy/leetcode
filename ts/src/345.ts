// https://leetcode.com/problems/reverse-vowels-of-a-string

function reverseVowels(s: string): string {
  const allVowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let vowels = []

  const ary: string[] = s.split('')

  for (let i = 0; i < ary.length; i++) {
    if (allVowels.has(ary[i])) {
      vowels.push(ary[i])
    }
  }

  let k = 0;
  for (let i = ary.length - 1; i >= 0; i--) {
    if (allVowels.has(ary[i])) {
      ary[i] = vowels[k]
      k++
    }
  }

  return ary.join('')
};

console.log(reverseVowels("aceCreIm")) // "IceCream"
