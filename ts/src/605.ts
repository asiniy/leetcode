function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const free: number[] = []

  for (let i = 0; i < flowerbed.length; i++) {
    // console.log('---')
    // console.log(i)
    // console.log(!flowerbed[i])
    // console.log(!flowerbed[i-1])
    // console.log(!flowerbed[i+1])

    if (!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
      free.push(i)
      i++
    }

    // if (n <= free.length) { return true } - just to speed things up - uncomment on the end
  }

  console.log('free', free)

  return n <= free.length
};

// console.log(canPlaceFlowers([1,0,0,0,1], 1))
