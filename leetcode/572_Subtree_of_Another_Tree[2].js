/**
 * Topics: Tree, Depth-First Search, String Matching, Binary Tree, Hash Function
 *
 *
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  const findSub = (n1, n2) => {
    if (!n1 || !n2) return !n1 && !n2;
    if (n1.val !== n2.val) return false;

    return findSub(n1.left, n2.left) && findSub(n1.right, n2.right);
  };

  const dfs = (root) => {
    if (!root) return false;
    if (findSub(root, subRoot)) return true;

    return dfs(root.left) || dfs(root.right);
  };

  return dfs(root);
};

// 오답
const isSubtree2 = (root, subRoot) => {
  if (!root && !subRoot) return true;
  else if (!root || !subRoot) return false;

  if (root.val === subRoot.val) {
    return (
      isSubtree(root.left, subRoot.left) && isSubtree(root.right, subRoot.right)
    );
  } else if (root.val !== subRoot.val) {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
};
