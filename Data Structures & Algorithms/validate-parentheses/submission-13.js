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
            // compare closed parenthesis with top of stack
            if (s[i] == "}" || s[i] == ")" || s[i] == "]"){
                if (s[i] != map.get(stack.pop())) {
                    return false;
                }
            // push open parenthesis to stack
            } else {
                stack.push(s[i]);
            }
        }
        // check if successfully closed all parenthesis
        if (stack.length != 0) {
            return false;
        }
        return true;
    }
}
