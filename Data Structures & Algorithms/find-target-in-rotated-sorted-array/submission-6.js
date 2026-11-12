class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        // binary search
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            console.log(m);
            if (nums[m] == target) {
                return m;
            }
            if (nums[m] >= nums[l]) {
                if (target > nums[m]) {
                    l = m+1;
                } else {
                    if (target < nums[l]) {
                        l = m+1;
                    } else {
                        r = m;
                    }
                }
            } else {
               if (target < nums[m]) {
                    r = m-1;
                } else {
                    if (target <= nums[r]) {
                        l = m+1;
                    } else {
                        r = m;
                    }
                } 
            }
        }
        return -1;
    }
}
