class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sums = [];
        nums = nums.sort((a, b) => a - b);
        for(let n = 0; n < nums.length; n++) {
            // set pointers
            let i = n+1;
            let j = nums.length-1;
            while(i < j) {
                console.log(nums[n], nums[i], nums[j])
                if (nums[i] + nums[j] + nums[n] == 0) {
                    sums.push([nums[n], nums[i], nums[j]]);
                    // skipping duplicates
                    while (nums[j] == nums[j-1]) {
                        j--;
                    }
                    while (nums[i] == nums[i+1]) {
                        i++;
                    }
                    i++;
                    j--;
                } else if (nums[i] + nums[j] + nums[n] > 0) {
                    // move right pointer
                    j--;
                } else {
                    // move left pointer
                    i++;
                }
            }
            // skip duplicate
            while (nums[n] == nums[n+1]) {
                    n++;
            }
        }
        return sums;
    }
}
