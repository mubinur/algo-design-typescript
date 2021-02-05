/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [...new Array(nums.length)].fill(0);
    let lastNum = nums[0];
    let streak = 1;
    dp[0] = streak;

    for (let i = 1; i < nums.length; i++){
        if (lastNum === nums[i]) dp[i] = 0;
        else {
            streak = 0;
            let j = i - 1;
            while (j >= 0){
                if (nums[j] < nums[i]) streak = Math.max(streak, dp[j]);
                j--;
            }
            dp[i] = ++streak;
            lastNum = nums[i];    
        }
         

    }
    return Math.max(...dp);
};