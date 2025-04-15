/**
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * 재귀는 너무 어려웡
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
const goodNodes = (root) => {
  if (!root) return 0;

  const dfs = (node, max) => {
    if (!node) return 0;

    let cnt = 0;
    if (max <= node.val) cnt++;

    const newMax = Math.max(max, node.val);

    const left = dfs(node.left, newMax);
    const right = dfs(node.right, newMax);

    return left + right + cnt;
  };

  return dfs(root, root.val);
};
