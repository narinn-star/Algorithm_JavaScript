/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Topics : Backtracking, Tree, Depth-First Search, Binary Tree
 *
 * Problem
 *  노드를 하나씩 더하면서 targetSum과 같아지면 해당 경로를 결과 리스트에 추가한다.
 *
 * Explanation
 * 왼쪽 노드와 오른쪽 노드 모두 탐색해야하므로 recursive를 사용했다.
 * 현재 노드값과 지금까지 더해진 값을 계속 들고 이동하며 지금까지 지나온 경로도 추가로 파라미터값으로 가진다.
 * 만약 targetSum과 지금까지 더해진 s값이 같고, 왼쪽/오른쪽 노드가 null이라면 즉, 끝노드까지 왔다면 결과 리스트에 지금까지 담아둔 경로를 추가한다.
 *
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = [];

  const recursive = (node, sum, ans) => {
    if (!node) return;
    const s = sum + node.val;
    const a = [...ans, node.val];
    console.log(a);
    if (s === targetSum && !node.left && !node.right) {
      res.push(a);
      return;
    }

    recursive(node.left, s, a);
    recursive(node.right, s, a);
  };

  recursive(root, 0, []);

  return res;
};
