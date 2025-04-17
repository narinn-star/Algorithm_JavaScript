/**
 * Topics: Tree, Depth-First Search, Binary Search Tree, Binary Tree
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
 * @return {boolean}
 */
const isValidBST = (root) => {
  const findBST = (root, min, max) => {
    if (!root) return true;

    if (!(root.val > min && root.val < max)) return false;

    return (
      findBST(root.left, min, root.val) && findBST(root.right, root.val, max)
    );
  };

  return findBST(root, -Infinity, Infinity);
};
