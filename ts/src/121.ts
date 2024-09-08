// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let difference = 0
  let minValue = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const currentValue = prices[i]
    const currentDifference = currentValue - minValue

    if (currentValue < minValue) {
      minValue = currentValue
    }

    if (currentDifference > difference) {
      difference = currentDifference
    }
  }

  return difference
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
