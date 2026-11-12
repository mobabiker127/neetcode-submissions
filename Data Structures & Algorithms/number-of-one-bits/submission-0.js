class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        // get binary of integer
        let z = n.toString(2);
        let oneCount = 0;
 
        // count 1's
        for(let i = 0; i < z.length; i++) {
            if (z[i] == "1") {
                oneCount++;
            }
            console.log(z[i]);
        }
        return oneCount;
    }
}
