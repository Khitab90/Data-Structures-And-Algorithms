//In a binary tree, a node is considered “visible” if no node on the root-to-itself path has a greater value.
//The root is always “visible” since there are no other nodes between the root and itself. 
//Given a binary tree, count the number of “visible” nodes.

function visible_tree_node(root) {
    return dfs(root, Number.NEGATIVE_INFINITY);
}

function dfs(root, max_sofar) {
    if (!root) return 0;
    let total = 0;
    if (root.val >= max_sofar) total++;

    //max_sofar for child node is larger of previousmax and current node val
    total += dfs(root.left, Math.max(max_sofar, root.val));
    total += dfs(root.right, Math.max(max_sofar, root.val));

    return total;
}

// Driver code
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
var inputs = ["5 4 3 x x 8 x x 6 x x", "-100 x -500 x -50 x x", "9 8 11 x x 20 x x 6 x x"];
var expected_outputs = [3, 2, 3];
for (var i = 0; i < inputs.length; i++) {
    const arr = inputs[i].split(" ")
    const arrIter = arr[Symbol.iterator]();
    const root = build_tree(arrIter);
    console.log("Visible tree node : ",visible_tree_node(root))
}