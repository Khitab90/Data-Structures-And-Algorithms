//Given a sorted array of integers and a target integer, 
//find the first occurrence of the target and return its index. 
//Return -1 if the target is not in the array.



function find_first_occurrence(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    let left = 0;
    let right = arr.length - 1;
    let target_index = -1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (arr[mid] == target) {
            target_index = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return target_index;
}
// Driver code
console.log("Find occurrence :", find_first_occurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100],3));
console.log("Find occurrence :", find_first_occurrence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],1));
console.log("Find occurrence :", find_first_occurrence([1, 22, 22, 33, 50, 100, 20000],33));
console.log("Find occurrence :", find_first_occurrence([4, 6, 7, 7, 7, 20],8));
console.log("Find occurrence :", find_first_occurrence([6, 7, 9, 10, 10, 10, 90],10));
console.log("Find occurrence :", find_first_occurrence([4],4));
