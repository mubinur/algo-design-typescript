/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = [...new Array(s.length + 1)].fill(0);
    dp[0] = 1; 
    dp[1] = parseInt(s.charAt(0)) !== 0 ? 1 : 0;
    for (let i = 2; i <= s.length; i++){
        let first = parseInt(s.slice(i - 1, i));
        let second = parseInt(s.slice(i - 2, i));
        if (first >= 1 && first <= 9) dp[i] = dp[i - 1];
        if (second >= 10 && second <= 26) dp[i] += dp[i - 2];
    }
    console.log(dp)
    return dp[s.length];
};