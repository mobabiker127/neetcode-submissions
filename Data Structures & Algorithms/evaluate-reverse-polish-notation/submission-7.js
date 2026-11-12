class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // single integer in array
        if (tokens.length == 1) {
            return tokens[0];
        }
        // store integers after operations have been applied
        let evals = [];
        // calculating answer to push into evals
        let ans = 0;
        // storing numbers to apply operations on
        let num1 = 0;
        let num2 = 0;


        for (let i = 0; i < tokens.length; i++) {
            switch(tokens[i]){
                // addition
                case "+":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = (parseInt(num1) + parseInt(num2));
                    evals.push(ans);
                    console.log(evals);
                    break;
                // subtraction
                case "-":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = (parseInt(num1) - parseInt(num2));
                    evals.push(ans);
                    break;
                // multiplication
                case "*":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = (parseInt(num1) * parseInt(num2));
                    evals.push(ans);
                    break;
                // division
                case "/":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = Math.trunc((parseInt(num1) / parseInt(num2)));
                    evals.push(ans);
                    break;
                default:
                    evals.push(tokens[i]);
                    console.log(evals);
                    break;
            }
            console.log(ans);
        }
        return ans;
    }
}
