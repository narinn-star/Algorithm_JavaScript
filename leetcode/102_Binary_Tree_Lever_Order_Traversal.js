/**
 * Topics: Tree, Breadth-First Search, Binary Tree
 *
 * 104 Maximum Depth of Binary Tree 문제 응용 버전인 것 같다.
 * 층별로 봐야하니까 너비우선탐색으로 접근했고, 큐에 넣어서 각 자식이 있는지 확인한 후에 tmp(층별 노드 넣을 배열)에 넣어준 후,
 * res에 넣어줬다.
 *
 * root값을 처음에 res에 넣지 않아서 생긴 오류, tmp값이 비었을 때 res에 넣지 않도록 예외처리 하지 않아서 생긴 오류,
 * 그리고 queue를 체크해서 반복문 돌리면서 queue엔 값 안넣고 tmp에 값만 쌓아줘서 생긴 오류..!
 * 이렇게 세가지를 놓쳐서 조금 시간이 걸렸지만 104번 문제가 아주 아주 많이 도움이 됐던 문제였다.
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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) return [];

  const queue = [];
  queue.push(root);

  const res = [];
  res.push([root.val]);

  while (queue.length > 0) {
    const size = queue.length;
    const tmp = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
        tmp.push(node.left.val);
      }
      if (node.right) {
        queue.push(node.right);
        tmp.push(node.right.val);
      }
    }
    if (tmp.length > 0) res.push(tmp);
  }
  return res;
};
