// class Solution {
//   //Function to check whether the number evenly divides N.
//   evenlyDivides(N) {
//     var count = 0;
//     let temp = N;
//     while (temp > 0) {
//       //12
//       let i = temp % 10; //2
//       if (N % i === 0) {
//         count++;
//       }
//       temp = Math.floor(temp / 10); //
//     }
//     return count;
//   }
// }

/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   const min32 = -Math.pow(2, 31);
//   const max32 = Math.pow(2, 31) - 1;
//   const reverse = parseInt(x.toString().split("").reverse().join(""));
//   return reverse < min32 || reverse > max32 ? 0 : x < 0 ? -reverse : reverse;
// };
// console.log(reverse(1534236469));

// var isPalindrome = function (x) {
//   const reverse = parseInt(x.toString().split("").reverse().join(""));
//   return reverse === x ? true : false;
// };
// console.log(isPalindrome(121));

// class Solution {
//   lcmAndGcd(a, b) {
//     //code here
//     const gcd = this.findGcd(a, b);
//     const lcm = (a * b) / gcd;
//     console.log(lcm, gcd);
//   }
//   findGcd(a, b) {
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }
// }

// class Solution {
//   //Function to find sum of divisors
//   sumOfDivisors(N) {
//     let sum = 0;

//     // Iterating from 1 to N.
//     for (let i = 1; i <= N; i++) {
//       // Calculating and accumulating the sum of divisors.
//       sum += Math.floor(N / i) * i;
//     }

//     // Returning the sum of divisors.
//     return sum;
//   }
// }

class Solution {
  minJumps(arr, n) {
    //code here
    if (arr[0] === 0) return -1;
    if (n === 1) return 0;
    let coverage = arr[0],
      lastjump = arr[0];
    let jumps = 1;
    //[1,2,4,6,7]
    for (let i = 1; i < n; i++) {
      if (i === n - 1) return jumps;
      coverage = Math.max(coverage, i + arr[i]);
      lastjump--;
      if (lastjump === 0) {
        jumps++;
        if (i >= coverage) {
          return -1;
        }
        lastjump = coverage - i;
      }
    }
    return -1;
  }
}
const solution = new Solution();
let arr = [1, 4, 3, 2, 6, 7];
console.log(solution.minJumps(arr, 6));
