class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length == 1) {
            return tokens[0];
        }
        let evals = [];
        let ans = 0;
        let num1 = 0;
        let num2 = 0;
        for (let i = 0; i < tokens.length; i++) {
            switch(tokens[i]){
                case "+":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = (parseInt(num1) + parseInt(num2));
                    evals.push(ans);
                    console.log(evals);
                    break;
                case "-":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = (parseInt(num1) - parseInt(num2));
                    evals.push(ans);
                    break;
                case "*":
                    num2 = evals.pop();
                    num1 = evals.pop();
                    ans = (parseInt(num1) * parseInt(num2));
                    evals.push(ans);
                    break;
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
