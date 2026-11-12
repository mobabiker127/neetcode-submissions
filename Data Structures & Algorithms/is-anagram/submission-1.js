class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // length must match
        if(s.length != t.length) {
            return false;
        }
        // initialize object to compare strings
        const firstSet = {};
        const secondSet = {};
        // inputting string into object
        for(let i = 0; i < s.length; i++) {
            firstSet[s[i]] = (firstSet[s[i]] || 0) + 1
            secondSet[t[i]] = (secondSet[t[i]] || 0) + 1
        }
        console.log(firstSet)
        console.log(secondSet)
        // comparing object values
        for(var key in firstSet) {
            console.log("Comparing " + firstSet[key] + " and " + secondSet[key])
            console.log(key)
            if (firstSet[key] != (secondSet[key])) {
                return false;
            }
        }
        return true
    }
}
