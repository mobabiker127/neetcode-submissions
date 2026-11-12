class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let postfix = 1;
        let final = [];
        // put prefix into final array
        for(const n in nums) {
            final[n] = prefix;
            prefix = prefix * nums[n];
        }
        // use postfix to calculate final answer
        for(let i = nums.length - 1; i >= 0; i--) {
            final[i] = postfix * final[i];
            postfix = nums[i] * postfix;
        }
        return final;
    }
}
