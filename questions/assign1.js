function arrayMan(arr, target) {
    let left = 0;
    let sum = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum > target) {
            sum -= arr[left];
            left++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}
let arr = [4, 2, 7, 1, 9, 5];
let target = 16;
console.log(arrayMan(arr, target));