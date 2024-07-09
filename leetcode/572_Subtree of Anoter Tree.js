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

/* Topics : Tree, Depth-First Search, String Matching, Binary Tree, Hash Function

Explanation
- 루트 트리에 서브 루트 트리를 포함하고 있는지를 확인하는 문제로, 
가장 먼저 할 것은 root트리 내에 subRoot 트리의 루트값이 있는가를 찾는 것이다.

동일한 루트값을 찾았다면 왼쪽 오른쪽 노드들도 같은지 계속해서 확인하고, 아니라면 false, 끝까지 가서 둘 다 null이 나온다면 true를 반환한다.
*/
const isSubtree = function (root, subRoot) {
  if (subRoot === null) return true;
  if (root === null) return false;

  if (findTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const findTree = (root, subRoot) => {
  if (root === null && subRoot === null) {
    return true;
  }

  if ((root && subRoot === null) || (root === null && subRoot)) {
    return false;
  }

  if (root.val !== subRoot.val) {
    return false;
  }

  return (
    findTree(root.left, subRoot.left) && findTree(root.right, subRoot.right)
  );
};
