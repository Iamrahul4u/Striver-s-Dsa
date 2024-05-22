// class Solution {
//   printNos(N) {
//     if (N <= 0) return;
//     this.printNos(N - 1);
//     process.stdout.write(N + " ");
//   }
// }
// const solution = new Solution();
// solution.printNos(5);

const utils = require("nodemon/lib/utils");

// class Solution {
//   /**
//      * @param number n

//      * @returns number
//     */
//   sumOfSeries(n) {
//     if (n <= 1n) return 1n;
//     return n ** 3n + this.sumOfSeries(n - 1n);
//   }
// }

// class Solution {
//   //Function to calculate the factorial of a number.
//   factorialNumbers(N) {
//     const res = [];
//     for (let i = 1; i <= N; i++) {
//       let ans = this.factorialNumber(i);
//       if (ans < N) {
//         res.push(ans.toString());
//       }
//     }
//     return res;
//   }
//   factorialNumber(n) {
//     if (n <= 0) return 1;

//     return n * this.factorialNumber(n - 1);
//   }
// }
// const solution = new Solution();
// const ans = solution.sumOfSeries(BigInt(5));
// console.log(ans);
// solution.factorialNumbers(3);

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

let a = "a";
console.log(a.charCodeAt(a));
