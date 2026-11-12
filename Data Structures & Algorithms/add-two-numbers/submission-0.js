/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // receive numbers
        let num1 = "";
        let num2 = "";

        let l3 = null;

        // traverse lists
        let temp1 = l1;
        let temp2 = l2;
        let temp3 = l3;

        // extract number from list 1
        while (temp1 != null) {
            num1 = num1.replace(/^/,temp1.val);
            temp1 = temp1.next;
        }

        // extract number from list 2
        while (temp2 != null) {
            num2 = num2.replace(/^/,temp2.val);
            temp2 = temp2.next;
        }
        
        let num3 = (parseInt(num1) + parseInt(num2)).toString();

        for(const i in num3) {
            let newNode = new ListNode(num3[i]);
            newNode.next = l3;
            l3 = newNode;
        }

        return l3;
    }
}
