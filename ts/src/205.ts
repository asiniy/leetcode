function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) { return false }

  const sAlphabet = {}
  const tAlphabet = {}

  for (let i = 0; i < s.length; i++) {
    const tLetter = t[i]
    const sLetter = s[i]

    if (sAlphabet.hasOwnProperty(sLetter) !== tAlphabet.hasOwnProperty(tLetter)) {
      return false
    }

    if (!sAlphabet.hasOwnProperty(sLetter)) {
      sAlphabet[sLetter] = tLetter
      tAlphabet[tLetter] = sLetter
      continue
    }

    if (sAlphabet[sLetter] !== tLetter || tAlphabet[tLetter] !== sLetter) {
      return false
    }
  }

  return true
};

console.log(isIsomorphic('add', 'egg'))
