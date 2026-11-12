class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let maxProfit = 0;
        let profit = 0;
        while(j < prices.length) {
            console.log("Comparing " + prices[i] + " and " + prices[j])
            if (prices[i] <= prices[j]) {
                profit = prices[j] - prices[i];
                j++;
            } else {
                i=j;
                j++;
            }
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
        return maxProfit;
    }
}
