// https://leetcode.com/problems/add-binary

function addBinary(a: string, b: string): string {
  const aR = a.split('').reverse().map((d) => +d)
  const bR = b.split('').reverse().map((d) => +d)

  let string: number[] = []
  let addition: number = 0
  const arySize = Math.max(aR.length, bR.length)

  for (let i = 0; i < arySize; i++) {
    const sum = (aR[i] || 0) + (bR[i] || 0) + addition
    addition = (sum >= 2) ? 1 : 0
    string.push(sum % 2)
  }

  if (addition === 1) {
    string.push(1)
  }

  return string.reverse().join('')
};

console.log(addBinary('11', '1')) // 100
// console.log(addBinary('1010', '1011')) // 10101
