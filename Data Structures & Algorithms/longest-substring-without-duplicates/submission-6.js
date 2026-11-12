class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // return 0 for empty string
        if (s.length == 0) {
            return 0;
        }
        // initialize set with first value
        let checkDupe = new Set([s[0]]);

        // two pointers for sliding technique
        let maxCounter = 1;
        let i = 0;
        let j = 1;
        console.log(checkDupe);
        while(j < s.length) {

            // check if right pointer is in set
            while (checkDupe.has(s[j])) {
                checkDupe.delete(s[i]);
                i++;
            }

            // add right pointer after removing (if necessary) from set
            checkDupe.add(s[j]);

            // update counter if longer substring is found
            let size = checkDupe.size;
            if (size > maxCounter) {
                maxCounter = size;
            }
            // move right pointer
            j++;
        }
        return maxCounter;
    }
}
