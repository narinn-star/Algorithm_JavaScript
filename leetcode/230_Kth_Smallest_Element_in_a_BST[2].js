/**
 * Topics: Tree, Depth-First Search, Binary Search Tree, Binary Tree
 *
 * BFS로 풀었는데 토픽에 없다..
 * 어쩐지 시간이 나만 오래걸리더라니 ~
 * DFS로 풀고, inorder 방식으로 순회하면 바로 작은 순으로 정렬되어있어서 따로 정렬 함수를 호출하지 않아도 된다.
 * 는 것을 다른 풀이를 보고 알았다 😅
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  if (!root) return 0;

  const queue = [];
  queue.push(root);

  const arr = [root.val];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
        arr.push(node.left.val);
      }
      if (node.right) {
        queue.push(node.right);
        arr.push(node.right.val);
      }
    }
  }

  arr.sort((a, b) => a - b);
  return arr[k - 1];
};

var kthSmallest2 = function (root, k) {
  const inorder = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    inorder.push(node.val);
    dfs(node.right);
  };
  dfs(root);

  return inorder[k - 1];
};
