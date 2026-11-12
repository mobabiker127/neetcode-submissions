class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // left pointer
        let l = 0;
        // right pointer
        let r = nums.length-1;
        while (l <= r) {
            // middle index
            let m = Math.floor((l + r) / 2);
            console.log(m);
            console.log(nums[m]);
            // found target
            if (nums[m] == target) {
                return m;
            // target not found
            } else if (nums[m] < target) {
                l = m+1;
            } else {
                r = m-1;
            }
         }
        return -1;
    }
}
