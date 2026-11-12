class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length-1
        while (i < j) {
            // target found
            if (numbers[i] + numbers[j] == target) {
                return [i+1, j+1];
            // too large
            } else if (numbers[i] + numbers[j] > target) {
                j--
            // too small
            } else {
                i++;
            }
        }
        return -1;
    }
}
