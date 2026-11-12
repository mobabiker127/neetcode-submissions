class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // hash map to compare values
        var sums = new Map()
        for(let i = 0; i < nums.length; i++) {
            console.log(sums)
            console.log(sums.get(target-nums[i]))
            // sum is found in hash map
            if (sums.has(target-nums[i])) {
                return [sums.get(target-nums[i]), i]
            // add number and index to hash map
            } else {
                sums.set(nums[i], i);
            }
        }
    }
}
