/**
 * Topics: Tree, Depth-First Search, Binary Search Tree, Binary Tree
 *
 * 부모를 어떻게 기억해둬야하나.. 생각하고 있었는데 아무리 생각해도 전혀 답이 없어서 대소 비교를 했다. (BST라는 것에서 영감 얻기)
 * 조건만 잘 생각해주면 비교해서 root, root.right, root.left를 설정해주고 타고내려가다보면 root에 LCA가 남게 됨
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (Math.min(p.val, q.val) > root.val) {
      root = root.right;
    } else if (Math.max(p.val, q.val) < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};
