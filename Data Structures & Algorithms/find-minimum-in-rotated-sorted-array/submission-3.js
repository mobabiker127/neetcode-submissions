class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length-1;
        // binary search
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[l] < nums[r]) {
                return nums[l];
            }
            if (nums[m] >= nums[l]) {
                l = m+1;
            } else {
                r = m;
            }
        }
        return nums[l-1];
    }
}
