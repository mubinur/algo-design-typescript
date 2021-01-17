export { };

const solveKnapsack = function (profits, weights, capacity): Number {
  function solveKnapsackHelper(profits, weights, capacity, index) {
    if (index >= weights.length || capacity <= 0) return 0;

    const withCurrent = capacity < weights[index] ?
      0 : profits[index] + solveKnapsackHelper(profits, weights, capacity - weights[index], index + 1);
    const withoutCurrent = solveKnapsackHelper(profits, weights, capacity, index + 1);

    return Math.max(withCurrent, withoutCurrent);
  }
  return solveKnapsackHelper(profits, weights, capacity, 0);
};


const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
