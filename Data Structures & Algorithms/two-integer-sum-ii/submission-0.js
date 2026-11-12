class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // map to store numbers
        let map = new Map();
        for(let i = 0; i < numbers.length; i++) {
            // used to check if solution is in map
            let ans = target - numbers[i];
            if (map.has(ans)) {
                // return 1 indexed array
                return [(map.get(ans)), (i+1)];
            } else {
                // store in map with 1 index
                map.set(numbers[i], (i+1));
            }
        }
        return [];
    }
}
