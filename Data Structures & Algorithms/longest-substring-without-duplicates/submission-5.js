class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) {
            return 0;
        }
        let checkDupe = new Set([s[0]]);
        let maxCounter = 1;
        let i = 0;
        let j = 1;
        console.log(checkDupe);
        while(j < s.length) {

            console.log("Testing " + s[i] + " and " + s[j]);
            while (checkDupe.has(s[j])) {
                checkDupe.delete(s[i]);
                i++;
            }
            //checkDupe.add(s[j]);
            console.log(checkDupe.size);

            checkDupe.add(s[j]);

            let size = checkDupe.size;

            if (size > maxCounter) {
                maxCounter = size;
            }

            j++;
        }
        return maxCounter;
    }
}
