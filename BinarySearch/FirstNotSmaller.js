//Given an array of integers sorted in increasing order and a target, 
//find the index of the first element in the array that is larger or equal to the target. 
//Assume that it is guaranteed to find a satisfying number.

function first_not_smaller(arr,target){
    left = 0;
    right = arr.length-1;
    boundary_index = -1;

    while( left<=right ){
        let mid = left + Math.trunc((right-left)/2);
        if(arr[mid] >= target) {
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
console.log("Find first element :",first_not_smaller([1, 3, 3, 5, 8, 8, 10],2))
console.log("Find first element :",first_not_smaller([0],0))
console.log("Find first element :",first_not_smaller([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],10))
console.log("Find first element :",first_not_smaller([1, 1, 1, 1, 4, 5],3))
