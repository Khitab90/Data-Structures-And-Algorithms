//An array of boolean values is divided into two sections: the left section consists of all false, 
//and the right section consists of all true. 
//Find the boundary of the right section, i.e. the index of the first true element. 
//If there is no true element, return -1.

function find_boundary(arr){
    left = 0;
    right = arr.length-1;
    boundary_index = -1;

    while(left<=right){
        let mid = left + Math.trunc((right-left)/2);
        if(arr[mid]) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundary_index;
}

//Time Complexity: O(log(N))

console.log("Find Boundary :",find_boundary([false, false, true, true, true]))
console.log("Find Boundary :",find_boundary([true]))
console.log("Find Boundary :",find_boundary([false, false, false]));
console.log("Find Boundary :",find_boundary([true, true, true, true, true]))
console.log("Find Boundary :",find_boundary([false, true]))

