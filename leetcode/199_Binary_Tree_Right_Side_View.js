/**
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * 102번 심화 문제
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const rightSideView = (root) => {
  if (!root) return [];

  const queue = [];
  queue.push(root);

  const arr = [];
  arr.push([root.val]);

  while (queue.length > 0) {
    const size = queue.length;
    const tmp = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
        tmp.push(node.left.val);
      }

      if (node.right) {
        queue.push(node.right);
        tmp.push(node.right.val);
      }
    }
    if (tmp.length > 0) arr.push(tmp);
  }

  return arr.map((el) => {
    const length = el.length;
    return el[length - 1];
  });
};
