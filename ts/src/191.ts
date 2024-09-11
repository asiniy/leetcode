function hammingWeight(n: number): number {
  let binary: string = ''

  while (n > 0) {
    if (n % 2 === 1) {
      binary = '1' + binary
    } else {
      binary = '0' + binary
    }

    n = Math.floor(n / 2)
  }

  // console.log(`binary: ${binary}`)
  const numbers = binary.replaceAll('0', '').length
  return numbers
};

console.log(hammingWeight(128))
