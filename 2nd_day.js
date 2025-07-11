//57 . insert interval
// var insert = function (intervals, newInterval) {
//     intervals.push(newInterval)
//     intervals.sort((a, b) => a[0] - b[0])

//     for (let i = 0; i < intervals.length - 1; i++) {
//         if (intervals[i][1] >= intervals[i + 1][0]) {
//             intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
//             intervals.splice(i + 1, 1)
//             i--
//         }
//     }
//     return intervals
// };
// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));


// 238. Product of Array Except Self
var productExceptSelf = function (nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return answer;
};

console.log(productExceptSelf([1,2,3,4]));
