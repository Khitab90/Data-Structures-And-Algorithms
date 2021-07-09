function lca(root, node1, node2) {
    if (!root) return;

    //case2
    if (root === node1 || root === node2) return root;

    let left = lca(root.left, node1, node2);
    let right = lca(root.right, node1, node2);

    //case1
    if (left && right) return root;

    //left and right can't be both non-null
    //case 4 and 5, report target node or LCA back to parent
    if (left) return left;
    if (right) return right;

    //case 4, not found return null
    return null;
}

//Driver code
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function build_tree(nodes) {
    let val = nodes.next().value;
    if (!val || val === 'x') return;
    let cur = new Node(parseInt(val, 10));
    cur.left = build_tree(nodes);
    cur.right = build_tree(nodes);
    return cur;
}  
function find_node(root, target) {
    if (!root) return;
    if (root.val == target) return root;
    return find_node(root.left, target) || find_node(root.right, target);
}
function node_value(root) {
    if (!root) return null;
    return String(root.val);
}

const inputs = ["6 4 3 x x 5 x x 8 x x", "6 4 3 x x 5 x x 8 x x", "6 4 3 x x 5 x x 8 x x", "x"]
const inputs1 = [4, 4, 3, 3]
const inputs2 = [8, 6, 5, 2]
for (let i = 0; i < inputs.length; i++) {
    const arr = inputs[i].split(" ")[Symbol.iterator]()
    const root = build_tree(arr);
    const node1 = find_node(root, inputs1[i]);
    const node2 = find_node(root, inputs2[i]);
    let actual_output = lca(root, node1, node2);
    console.log("Lowest common ancestor : ",node_value(actual_output));
}