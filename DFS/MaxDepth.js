//The max depth of a binary tree is the longest root-to-leaf path.
//Given a binary tree, find its max depth.

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function max_depth(root) {
    if (!root) return 0;
    //Depth of current node's subtree = max depth of the two subtrees + 1 for current node
    return Math.max(max_depth(root.left), max_depth(root.right)) + 1;
}

//Driver code
function build_tree(nodes) {
	let val = nodes.next().value;
	if (!val || val === 'x') return;
	let cur = new Node(parseInt(val, 10));
	cur.left = build_tree(nodes);
	cur.right = build_tree(nodes);
	return cur;
}

var inputs = ["5 4 3 x x 8 x x 6 x x", "1 x x", "x", "6 x 9 x 11 x 7 x x"];
var expected_outputs = [3, 1, 0, 4];
for (var i = 0; i < inputs.length; i++) {
	const arr = inputs[i].split(" ")
	const arrIter = arr[Symbol.iterator]();
	const root = build_tree(arrIter);
	console.log("Get max depth", max_depth(root))
}