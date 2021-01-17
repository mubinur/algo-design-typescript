const solveKnapsack = function(profits: Array<number>, weights: Array<number>, capacity: number): number {
  const dp = [];
  function knapsackHelper(profits: Array<number>, weights: Array<number>, capacity: number, index: number) {
    if (index >= profits.length || capacity <= 0) return 0;

    dp[index] = dp[index] || [];
    if (typeof dp[index][capacity] !== "undefined") return dp[index][capacity];

    const withCurrent: number = weights[index] <= capacity ?
            profits[index] + knapsackHelper(profits, weights, capacity - weights[index], index + 1) : 0;
    const withoutCurrent: number = knapsackHelper(profits, weights, capacity, index + 1);
    dp[index][capacity] = Math.max(withCurrent, withoutCurrent);
    return dp[index][capacity];
  }
  return knapsackHelper(profits, weights, capacity, 0);
};

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
