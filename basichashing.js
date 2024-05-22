//     class Solution {
//     frequencyCount(arr, N, P) {
//         this.arr1 = new Array(N).fill(0);
//         for (let i = 0; i < N; i++) {
//         this.arr1[arr[i] - 1]++;
//         }
//         for (let i = 0; i < N; i++) {
//         arr[i] = this.arr1[i];
//         }

//     }
//     }
// const solution = new Solution();
// let arr = [2, 3, 2, 3, 5];
// solution.frequencyCount(arr, 5, 5);

var maxFrequency = function (nums, k) {
  let secondLargest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] < k) {
      secondLargest = nums[i];
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] < secondLargest && k > 0) {
      nums[j] += k - nums[j];
      k = nums[j] - k;
    }
  }
  console.log(nums);
};
let arr = [1, 2, 4];
maxFrequency(arr, 5);
