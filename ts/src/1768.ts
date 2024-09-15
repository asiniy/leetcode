function mergeAlternately(word1: string, word2: string): string {
  let i = 0
  let j = 0

  const ary: string[] = []

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      ary.push(word1[i])
      i++
    }

    if (j < word2.length) {
      ary.push(word2[j])
      j++
    }
  }

  return ary.join('')
};

console.log(mergeAlternately('ab', 'pqrs'))
