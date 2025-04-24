/**
 * Topics: Array, Hash Table, Divide and Conquer, Tree, Binary Tree
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;

  const root = preorder[0];

  const tree = new TreeNode(root);
  const mid = inorder.indexOf(root);

  const leftPre = preorder.slice(1, mid + 1);
  const leftIn = inorder.slice(0, mid + 1);
  const rightPre = preorder.slice(mid + 1);
  const rightIn = inorder.slice(mid + 1);

  tree.left = buildTree(leftPre, leftIn);
  tree.right = buildTree(rightPre, rightIn);

  return tree;
};
