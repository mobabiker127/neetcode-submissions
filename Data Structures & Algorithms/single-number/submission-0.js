class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // using bitwise XOR
        let res = 0;
        for (const n of nums) {
            res = n ^ res;
        }
        return res;
    }
}
