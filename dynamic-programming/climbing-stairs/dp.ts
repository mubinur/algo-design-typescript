/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let mem = new Array(n + 1);
    mem[0] = mem[1] = 1;
    for (let i = 2; i <= n; i++){
        mem[i] = mem[i - 1] + mem[i - 2];
    }
    
    return mem[n];
    
};