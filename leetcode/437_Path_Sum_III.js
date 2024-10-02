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
 * @param {number} targetSum
 * @return {number}
 */

const pathSum = (root, targetSum, path = []) => {
  if (root === null) return 0;

  path.push(root.val);

  let cnt = 0;
  let sum = 0;

  for (let i = path.length - 1; i >= 0; i--) {
    sum += path[i];
    if (sum === targetSum) cnt += 1;
  }

  cnt += pathSum(root.left, targetSum, path);
  cnt += pathSum(root.right, targetSum, path);

  path.pop();

  return cnt;
};
