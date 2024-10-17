/**
 * Topics: Hash Table, Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * target과 k거리에 있는 값들을 모두 배열에 넣어 출력하는 문제다.
 * 이 문제에서 관건은 부모 노드들을 어떻게 저장해서 뽑아내느냐라고 생각했다. 처음에 해시맵으로 접근했는데 하다보니 왜그렇게 했는지 기억이 안남..
 * target 찾을 때까지 도는데 target을 찾으면 그때부터 자식 노드들 중 k거리의 값들을 찾고, target과 다르면 해시맵에 순서(깊이): 노드 값
 * 이렇게 넣어뒀다. 왜그랬지.. 당연히 안되는 것임
 *
 * 한참 고민하다 부모 노드 저장하는 것만 다른 분의 코드를 참고했다.
 * 자식 노드들을 살펴보기 이전에 parent를 그냥 쌓아주기만하면 되는거여씀.. js에서는 저렇게 속성을 추가할 수 있기 때문에 node.parent로 새로 속성을 만들어 이어붙여주면 된다.
 *
 * visited를 넣어준 이유는 방문했던 곳을 다시 또 방문하면 무한루프에 빠질 수 있기 때문에 방문 체크를 하는 용도다.
 *
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = (root, target, k) => {
  const res = [];
  const visited = new Set();

  const findParents = (node, parent = null) => {
    if (!node) return;

    node.parent = parent;
    findParents(node.left, node);
    findParents(node.right, node);
  };

  const findValues = (node, cnt = 0) => {
    if (!node) return;

    if (visited.has(node.val)) return;

    if (cnt === k) {
      res.push(node.val);
      return;
    } else {
      visited.add(node.val);
      findValues(node.left, cnt + 1);
      findValues(node.right, cnt + 1);
      findValues(node.parent, cnt + 1);
    }
  };

  findParents(root);
  findValues(target);

  return res;
};
