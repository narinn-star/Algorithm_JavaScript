/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Topics : Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * Problem
 * 모든 depth의 너비 중 가장 큰 값 찾기
 *
 * Explanation
 * BFS
 * - null값을 포함시켜야할 때가 있기 때문에, 각 노드의 인덱스 값을 계산
 * - 새로운 depth의 노드를 탐색하기 전에 현재 depth의 너비를 계산 및 max값 갱신
 * - BigInt issue,,,, 😡
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

const widthOfBinaryTree = (root) => {
  if (root === null) return 0;

  let queue = [{ node: root, idx: 0n }];
  let max = 0n;

  while (queue.length > 0) {
    let len = queue.length;
    let width = queue[len - 1].idx - queue[0].idx + 1n;
    max = max > width ? max : width;

    for (let i = 0; i < len; i++) {
      let { node, idx } = queue.shift();

      if (node.left) {
        queue.push({ node: node.left, idx: 2n * idx });
      }

      if (node.right) {
        queue.push({ node: node.right, idx: 2n * idx + 1n });
      }
    }
  }
  return max;
};
