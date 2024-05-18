// Pattern 1
// class Solution {
//   // Function to print square of N
//   printSquare(N) {
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < N; j++) {
//         process.stdout.write("*");
//       }
//       console.log();
//     }
//   }
// }

// Pattern 2
// class Solution {
//   //Function to check whether the list is palindrome.
//   printTriangle(N) {
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j <= i; j++) {
//         process.stdout.write("*");
//       }
//       console.log();
//     }
//   }
// }

// Pattern 3

class Solution {
  printTriangle(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write(i + 1 + " ");
      }
      console.log();
    }
  }
}

const solution = new Solution();

solution.printTriangle(5);
