
// var containsDuplicate = function (nums) {
//     let set = new Set(nums)
//     if(set.size==nums.length) return false
//     return true

// };
// console.log(containsDuplicate([1, 2, 3, 4]))

// var sortedSquares = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = (nums[i] * nums[i] )
//     }
//     return nums.sort((a,b)=>a-b)
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// var sortedSquares = function(nums) {
//     const n = nums.length;
//     const res = new Array(n);
//     let left = 0, right = n - 1;
//     let write = n - 1;

//     while (left <= right) {
//         const leftSq = nums[left] * nums[left];
//         const rightSq = nums[right] * nums[right];

//         if (leftSq > rightSq) {
//             res[write--] = leftSq;
//             left++;
//         } else {
//             res[write--] = rightSq;
//             right--;
//         }
//     }

//     return res;
// };