/**
 * Topics: Tree, Depth-First Search, Binary Tree
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
const diameterOfBinaryTree = (root) => {
  if (!root) return 0;
  let maxDiameter = 0;

  const findDepth = (node, depth) => {
    if (!node) return 0;

    let leftDepth = findDepth(node.left);
    let rightDepth = findDepth(node.right);

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  };

  findDepth(root);
  return maxDiameter;
};
