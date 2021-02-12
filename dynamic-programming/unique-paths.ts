/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++){
            dp[i] = dp[i]  || new Array(i);
            dp[i][j] = undefined;
        }
    }
    let uniquePathsHelper = (i , j) => {
        if (i >= m || j >= n) return 0;
        if (dp[i][j]) return dp[i][j];
        if (i === m - 1 && j === n - 1) return 1;
        
        let right =  uniquePathsHelper(i, j + 1);
        let bottom = uniquePathsHelper(i + 1, j);
        
        dp[i][j] = right + bottom;
        return dp[i][j];
    };
    
    return  uniquePathsHelper(0, 0);
};