class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = "";
        s = s.replace(/[^\w]/g, "").toLowerCase();
        console.log(s);
        for(let i = s.length - 1; i >= 0; i--) {
            str += s[i];
        }
        if (str == s) {
            return true;
        }
        return false;
    }
}
