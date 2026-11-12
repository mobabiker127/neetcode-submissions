class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // mapping all uppercase letters
        let map = new Map([ ["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0],
        ["F", 0], ["G", 0], ["H", 0], ["I", 0], ["J", 0], ["K", 0], ["L", 0],
        ["M", 0], ["N", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0], ["S", 0],
        ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0], ["Y", 0], ["Z", 0]
        ]);
        
        let result = 0;

        // two pointers starting at first index of string
        let i = 0;
        let j = 0;

        // tracking most frequent character in substring
        let mostFreqCount = 0;

        // using sliding window technique
        while (j < s.length) {
            let window = j-i+1;
            map.set(s[j], (map.get(s[j]) || 0) + 1);

            // checking most frequent character
            mostFreqCount = Math.max(mostFreqCount, map.get(s[j]));

            // checking current window for validity
            while (window - mostFreqCount > k) {
                map.set(s[i], map.get(s[i]) - 1);
                i++;
                window = j - i + 1;
            }
            result = Math.max(result, window);
            j++;
        }
        return result;
    }
}
