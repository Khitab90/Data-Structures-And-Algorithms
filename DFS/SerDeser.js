function serialize(root) {
    let res = [];
    serialize_dfs(root, res);
    return res.join(" ");
}

function serialize_dfs(root, res) {
    if (!root) {
        res.push("x");
        return;
    }
    res.push(root.val);
    serialize_dfs(root.left, res);
    serialize_dfs(root.right, res);
}

function deserialize(s) {
    return deserialize_dfs(s.split(" ")[Symbol.iterator]());
}

function deserialize_dfs(nodes) {
    let val = nodes.next().value;
    if (val === 'x') return;
    const cur = new Node(parseInt(val, 10));
    cur.left = deserialize_dfs(nodes);
    cur.right = deserialize_dfs(nodes);
    return cur;
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
function get_tree(root, arr) {
    if (!root) {
        arr.push("x");
    } else {
        arr.push(root.val);
        get_tree(root.left, arr);
        get_tree(root.right, arr);
    }
}
var inputs = ["6 4 3 x x 5 x x 8 x x", "1 2 x x 3 x x", "10 86 x x 100 x x","x"];
for (var i = 0; i < inputs.length; i++) {
    const arr = inputs[i].split(" ")
    const arrIter = arr[Symbol.iterator]();
    const root = build_tree(arrIter);
    var actual_output = deserialize(serialize(root));
    var array = [];
    get_tree(actual_output, array);
    console.log("Serializing and deserializing :",array.join(" "));
}