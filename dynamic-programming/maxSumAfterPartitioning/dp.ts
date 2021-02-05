/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, K) {
    const dp = [];
    for (let i = 0; i < arr.length; i++) {
        let partition = 0;
        for (let k = 1; k <= K && (k - 1) <= i; k++) {
            partition = Math.max(partition, arr[i - (k - 1)] || 0);
            dp[i] = Math.max(dp[i] || 0, (dp[i - k] || 0) + (partition * k));
        }
    }
    console.log(dp);
    
    return dp[arr.length - 1];
};