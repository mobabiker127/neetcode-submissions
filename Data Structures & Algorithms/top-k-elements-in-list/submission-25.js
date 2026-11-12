class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // final solution
        let solution = [];
        // array of values indexed by their occurence
        let vals = Array(nums.length);
        // map with values and their occurence
        let map = new Map();
        // applying values and occurence to a map
        for(const n of nums) {
            if(map.has(n)) {
                map.set(n, (map.get(n)) + 1);
            } else {
                map.set(n, 1);
            }
            console.log(map)
        }
        // indexing values based of their occurence
        for(const [key, value] of map) {
            if (vals[value] !== undefined) {
                vals[value].push(key)
            } else {
                vals[value] = [key]
            }
        }
        console.log(vals);
        // finding greatest occurences of vals
        for(let i = vals.length - 1; i >= 0; i--) {
            console.log("Solution is " + solution)
            console.log("Length of solution is " + solution.length)
            if (k == 0) {
                return solution;
            } else if (vals[i] !== undefined) {
                console.log("size of vals[i] is " + vals[i].length)
                console.log(k)
                k = k - vals[i].length
                solution.push(...vals[i]);
            }
        }
        //return solution;
    }
}
