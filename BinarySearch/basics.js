function binarySearch(arr, target) {
    left = 0;
    right = arr.length-1;

    while(left<=right){
        let mid = left + Math.trunc((right - left) / 2); 
        if (arr[mid] == target) return mid;
        if (arr[mid] < target){
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log("Binary search :", binarySearch([1, 3, 5, 7, 8],5));
console.log("Binary search :", binarySearch([1, 2, 3, 4, 5, 6, 7],0));
console.log("Binary search :", binarySearch([2, 8, 89, 120, 1000],120));