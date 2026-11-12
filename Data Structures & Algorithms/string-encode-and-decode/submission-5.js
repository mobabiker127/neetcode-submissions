class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let code = "";
        for (const s of strs) {
            // encoding  with string length followed by #
            code += s.length + "#" + s
        }
        console.log(code)
        return code;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const reg = /^\d+$/;
        // array to insert decoded message
        let strs = []
        while (str != "") {
            console.log(strs)
            let num = ""
            // extracting number for string
            while (reg.test(str[0])) {
                num += str[0];
                str = str.substring(1)
            }
            console.log(num)
            num = parseInt(num)
            console.log(num)
            // using code to push string to array
            strs.push(str.substring(1, (num+1)))
            // check if last code in message
            if (str.length == num+1) {
                str = "";
            } else {
                // continue decoding
                str = str.substring(num+1, str.length)
            }
        }
        return strs
    }
}


