class Solution {
    hasDuplicate(nums) {
        // using a hash set to find duplicates
        let set = new Set();
        const size = nums.length;
        for(let i = 0; i < size; i++) {
            if (!set.has(nums[i])) {
                set.add(nums[i])
            } else {
                return true;
            }
        }
        return false;
    }
}
