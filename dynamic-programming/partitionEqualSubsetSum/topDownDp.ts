/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums: Array<number>): boolean {
    const sum = nums.reduce((accumulator, current) => accumulator + current);
    if (sum % 2 !== 0) return false;
    const dp = {};
    function canPartitionHelper(index, nums, remainingSum){
        if (remainingSum === 0) return true;
        if (index === nums.length) return false;
        if (typeof dp[remainingSum] === 'undefined'){
            dp[remainingSum] = canPartitionHelper(index + 1, nums, remainingSum - nums[index]) || canPartitionHelper(index + 1, nums, remainingSum); 
        }
        return dp[remainingSum];
    }
  return canPartitionHelper(0, nums, sum / 2);
};