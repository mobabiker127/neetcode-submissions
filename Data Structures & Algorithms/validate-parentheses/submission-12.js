class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const map = new Map();
        map.set("[", "]");
        map.set("{", "}");
        map.set("(", ")");
        console.log(stack);
        for (let i = 0;i < s.length; i++) {
            if (s[i] == "}" || s[i] == ")" || s[i] == "]"){
                if (s[i] != map.get(stack.pop())) {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }
        console.log(stack);
        /*
        let i = 0;
        let j = s.length-1;
        while (i < j) {
            console.log(s[i]);
            console.log(s[j]);
            console.log(map.get(s[i]))
            console.log("Comparing ")
            if (map.get(s[i]) != s[j]) {
                return false;
            }
            i++;
            j--;
        }*/
        if (stack.length != 0) {
            return false;
        }
        return true;
    }
}
