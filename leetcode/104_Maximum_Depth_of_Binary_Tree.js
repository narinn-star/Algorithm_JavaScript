/**
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * BFS, DFS 방법으로 각각 풀이
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [];
  queue.push(root);
  let depth = 0;

  while (queue.length > 0) {
    depth++;

    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return depth;
};

const maxDepth2 = (root) => {
  if (!root) return 0;

  const leftDepth = maxDepth2(root.left);
  const rightDepth = maxDepth2(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
