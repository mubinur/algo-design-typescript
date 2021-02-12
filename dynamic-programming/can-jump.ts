/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let set = new Set();
    let canJumpHelper = (index) => {
        if (index >= nums.length - 1) return true;
        const num = nums[index];
        for (let i = index + 1; i <= index + num; i++){
            if (set.has(i)) continue;
            if (canJumpHelper(i)) return true;
        }
        set.add(index);
        return false;
    }
    
    return canJumpHelper(0);
};

