class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        let max = 0;
        let i = 0;
        let j = heights.length - 1;
        while (i < j) {
            if (heights[i] > heights[j]) {
                area = heights[j] * (j-i);
                j--;
            } else {
                area = heights[i] * (j-i);
                i++;
            }
            if (area > max) {
                max = area;
            }
        }
        return max;
    }
}
