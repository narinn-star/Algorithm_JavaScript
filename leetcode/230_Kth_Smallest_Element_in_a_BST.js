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
 * @param {number} k
 * @return {number}
 */

/* Topics : Tree, Depth-First Search, Binary Search Tree, Binary Tree

Explanation
BST에서 k번째로 작은 수를 찾는 문제다.
주어지는 트리를 모두 배열에 담은 후에 정렬해주고 k-1번째 값을 리턴했다.
왜 미디엄이지 ?
*/

const kthSmallest = function (root, k) {
  let res = [];
  makeArr(res, root);

  res.sort((a, b) => a - b);
  return res[k - 1];
};

const makeArr = (res, root) => {
  if (root === null) return;

  res.push(root.val);

  makeArr(res, root.right);
  makeArr(res, root.left);
};
