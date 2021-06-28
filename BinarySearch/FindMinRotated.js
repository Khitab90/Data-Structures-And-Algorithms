//A sorted array was rotated at an unknown pivot. 
//For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. 
//Find the index of the minimum element in this array.



function findMinRotated(n) {
    let left = 0;
    let right = n.length - 1;
    let res = -1;
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);
        if (n[mid] <= n[n.length - 1]) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
}

//Time Complexity is O(log(N))

// Driver code
console.log("Find minimum rotated :", findMinRotated([30, 40, 50, 10, 20]));
console.log("Find minimum rotated :", findMinRotated([0, 1, 2, 3, 4, 5]));
console.log("Find minimum rotated :", findMinRotated([0]));

