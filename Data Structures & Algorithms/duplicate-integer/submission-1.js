class Solution {
    hasDuplicate(nums) {
        const size = nums.length;
        for(let i = 0;i < size; i++){
            // number to check for dupe
            let num = nums[0]
            // remove number from array to avoid self check
            nums.splice(0, 1)
            // checking number in array
            if(nums.includes(num)) {
                return true
            }
        }
        return false
    }
}
