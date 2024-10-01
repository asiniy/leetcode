// https://leetcode.com/problems/greatest-common-divisor-of-strings

function gcdOfStrings(str1: string, str2: string): string {
  let shortest: string, longest: string
  if (str1.length >= str2.length) {
    longest = str1
    shortest = str2
  } else {
    longest = str2
    shortest = str1
  }

  for (let i = shortest.length; i >= 1; i--) {
    if (shortest.length % i !== 0 || longest.length % i !== 0) { continue }
    const substring = shortest.substring(0, i)
    if (substring.repeat(shortest.length / i) === shortest && substring.repeat(longest.length / i) === longest) { return substring }
  }

  return ''
}

// A suboptimal one!
// function gcdOfStrings(str1: string, str2: string): string {
//   function dividers(s: string): Set<string> {
//     const set: Set<string> = new Set()

//     for (let i = s.length; i >= 1; i--) {
//       if (s.length % i !== 0) { continue }
//       const substring = s.substring(0, i)
//       if (substring.repeat(s.length / i) === s) { set.add(substring) }
//     }

//     return set
//   }

//   const set1 = dividers(str1)
//   const set2 = dividers(str2)

//   for (const divider of set1) {
//     if (set2.has(divider)) { return divider }
//   }

//   return ''
// };

console.log(gcdOfStrings('ABABAB', 'ABAB'))
console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('LEET', 'CODE'))
