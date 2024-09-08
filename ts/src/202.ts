// https://leetcode.com/problems/happy-number

function isHappy(n: number): boolean {
  const numbers = {}

  while (n !== 1) {
    numbers[n] = true
    const digits = n.toString().split('').map((d) => +d)
    const squareSum = digits.reduce((accumulator, digit) => { return accumulator + digit ** 2 }, 0)
    console.log(`number is: ${n}, squareSum is: ${squareSum}, digits are: ${digits}`)
    n = squareSum
    if (numbers.hasOwnProperty(n)) { return false }
  }

  return true
}

// function isHappy(n: number): boolean {
//   const digits = n.toString().split('').map((d) => +d)
//   const squareSum = digits.reduce((accumulator, digit) => { return accumulator + digit ** 2 }, 0)

//   if (squareSum === 1) { return true }
//   if (squareSum <= 9) { return false }
//   return isHappy(squareSum)
// };

console.log(isHappy(111111))
