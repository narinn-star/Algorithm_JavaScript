/**
 * Topics: Tree, Depth-First Search, Binary Tree
 *
 * 왓더.. 리턴을 저렇게 받을거라곤 생각을 못했다.. ㅎ
 * 접근 자체는 맞았던 것 같은데, 나는 min, max 모두 구하려고 했고 굳이 min이 필요도 없음을 알게됨.
 * 에잉 ~~!~!
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
const isBalanced = (root) => {
  const dfs = (node) => {
    if (!node) return [true, 0];

    const [leftBalanced, leftDepth] = dfs(node.left);
    const [rightBalanced, rightDepth] = dfs(node.right);

    const isBalanced =
      leftBalanced && rightBalanced && Math.abs(leftDepth - rightDepth) <= 1;

    return [isBalanced, Math.max(leftDepth, rightDepth) + 1];
  };

  return dfs(root)[0];
};
