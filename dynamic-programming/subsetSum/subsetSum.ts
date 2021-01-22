export { };
const canPartition = function (num: Array<number>, sum: number) {
    const dp: Object = {};
    function canPartitionHelper(num, sum, index) {
        if (sum === 0) return true;
        if (index >= num.length) return false;
        const withoutCurrentNum = dp[sum] = dp[sum] || canPartitionHelper(num, sum, index + 1);
        if (withoutCurrentNum) return true;
        return dp[sum - num[index]] = dp[sum - num[index]] || canPartitionHelper(num, sum - num[index], index + 1);
    }
    return canPartitionHelper(num, sum, 0);
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
