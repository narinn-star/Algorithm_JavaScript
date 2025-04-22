/**
 * Topics: Hash Table, Linked List
 *
 * 깊은 복사 ~
 */
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
const copyRandomList = (head) => {
  if (!head) return null;

  const map = new Map();
  let root = head;

  while (root) {
    map.set(root, new Node(root.val));
    root = root.next;
  }

  root = head;
  while (root) {
    map.get(root).next = map.get(root.next) || null;
    map.get(root).random = map.get(root.random) || null;
    root = root.next;
  }

  return map.get(head);
};
