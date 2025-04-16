/**
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * 왜 리턴값에 함수 두개 호출할 생각을 못했을까
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  else if (!p || !q) return false;

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else return false;
};
