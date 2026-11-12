class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = [];
        // finding row with target
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][matrix[i].length-1] >= target) {
                row = matrix[i];
                break;
            }
        }
        console.log(row);
        let l = 0;
        let r = row.length-1
        // running binary search on row
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (row[m] == target) {
                return true;
            } else if (row[m] < target) {
                l = m+1;
            } else {
                r = m-1;
            }
        }
        return false;
    }
}
