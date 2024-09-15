/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-ignore
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if (!head) { return null }
//   const set = new Set<number>()

//   // @ts-ignore
//   let chainNode: ListNode = head
//   // @ts-ignore
//   let node: ListNode = head.next

//   set.add(chainNode.val)

//   while (node) {
//       if (!set.has(node.val)) {
//           set.add(node.val)
//           chainNode.next = node
//           chainNode = node
//       }

//       node = node.next
//   }

//   chainNode.next = null

//   return head
// };

// A better solution - I overlooked it
// @ts-ignore
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head

  while (current && current.next) {
      if (current.val === current.next.val) {
          current.next = current.next.next
          continue
      }

      current = current.next
  }

  return head
};
