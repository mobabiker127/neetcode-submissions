class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = [];
        // ignore everything but letters in input string
        s = s.replace(/[^\w]/g, "").toLowerCase();
        console.log(s);
        // reverse string into array
        for(let i = s.length - 1; i >= 0; i--) {
            str.push(s[i]);
        }
        // converting array back to string
        str = str.join('');
        // comparing strings
        if (str == s) {
            return true;
        }
        return false;
    }
}
