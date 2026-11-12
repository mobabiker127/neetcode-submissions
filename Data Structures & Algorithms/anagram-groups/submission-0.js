class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // initializing hash map to add strings
        let res = new Map();
        // array to count letters
        let count = [];
        for(const s of strs) {
            // initialize 0 for each letter in alphabet
            count = Array(26).fill(0);
            // count letter using ascii code
            for(const c of s) { 
                count[(c.charCodeAt(0) - "a".charCodeAt(0))] += 1
            }
            // convert to string for comparability
            count = JSON.stringify(count)
            // add to existing map set
            if (res.has(count)) {
                res.get(count).push(s);
            // create new map set
            } else {
                res.set(count, [s]);
            }
    }
    console.log([...res.values()])
    return [...res.values()]
    }
}
