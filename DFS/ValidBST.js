function valid_BST(root) {
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) //root is always valid
}

function dfs(root, min_val, max_val) {
    if (!root) return true;

    if (!(min_val <= root.val && root.val <= max_val)) return false;

    return dfs(root.left, min_val, root.val) && dfs(root.right, root.val, max_val);
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
var inputs = ["6 4 3 x x 5 x x 8 x x", "6 4 3 x x 8 x x 8 x x", "1 2 x x 3 x x", "x","7 7 7 x x x 7 x 7 x x"];
for (var i = 0; i < inputs.length; i++) {
    const arr = inputs[i].split(" ")
    const arrIter = arr[Symbol.iterator]();
    const root = build_tree(arrIter);
    console.log("Valid binary search tree : ",valid_BST(root))
}