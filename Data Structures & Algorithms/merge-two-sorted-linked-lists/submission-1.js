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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // temp nodes to traverse lists
        let temp1 = list1;
        let temp2 = list2
        let list3 = new ListNode()
        let temp3 = list3;
        
        while (temp1 != null || temp2 != null) {
            // list 1 is empty, take remaining values from list 2
            if (temp1 == null) {
                while (temp2 != null) {
                    temp3.next = temp2;
                    temp2 = temp2.next;
                    temp3 = temp3.next;
                }
                break;
            // list 2 is empty, take remaining values from list 1
            } else if (temp2 == null) {
                while (temp1 != null) {
                    temp3.next = temp1;
                    temp1 = temp1.next;
                    temp3 = temp3.next;
                }
                break;
            }
            // list 1 has smaller value
            if (temp1.val < temp2.val) {
                temp3.next = temp1;
                temp1 = temp1.next;
                temp3 = temp3.next
            // list 2 has smaller value
            } else {
                temp3.next = temp2;
                temp2 = temp2.next;
                temp3 = temp3.next;
            }
        }
        // avoid dummy value
        return list3.next;
    }
}
