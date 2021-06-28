//A mountain array is defined as an array that:
//Has at least 3 elements.
//Has an element with the largest value called the “peak”, at an index k. 
//The array elements monotonically increase from the first element to A[k], 
//and then monotonically decreases from A[k + 1] to the last element of the array. Thus creating a “mountain” of numbers.
//Find the index of the peak element. Assume there are no duplicates.

function peak_of_mountain_array(arr) {
    let left = 0;
    let right = arr.length - 1;
    let boundary_index = -1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (mid === arr.length - 1 || arr[mid] >= arr[mid + 1]) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundary_index;
}

//Time Complexity: O(log(N))

// Driver code
console.log("Find Peak of mountain :", peak_of_mountain_array([0, 1, 2, 3, 2, 1, 0]));
console.log("Find Peak of mountain :", peak_of_mountain_array([0, 10, 3, 2, 1, 2]));
console.log("Find Peak of mountain :", peak_of_mountain_array([0, 10, 0]));