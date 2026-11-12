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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let set1 = new Set();
        let temp = head;
        while (temp != null) {
            if (set1.has(temp)) {
                return true;
            } else {
                set1.add(temp);
                temp = temp.next;
            }
        }
        return false;
    }
}
