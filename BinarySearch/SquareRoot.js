//Given an integer, find its square root without using the built-in square root function. 
//Only return the integer part (truncate the decimals).

function square_root(n) {
    if (n==0) return 0;
    let left = 0;
    let right = n;
    res = -1;

    while(left<=right) {
        let mid = left + Math.trunc((right - left)/2);
        if (mid * mid <= n){
            left = mid + 1;
            res = mid;
        }
        else {
            right = mid - 1;
        }
    }

    return res;
}

//The time complexity is O(log(N))O(log(N))

// Driver code
console.log("Square root :", square_root(4));
console.log("Square root :", square_root(8));
console.log("Square root :", square_root(100000));