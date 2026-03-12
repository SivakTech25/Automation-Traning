/*Implement pow(x, n), which calculates x raised to the power n (i.e., xn
).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/2^2 = 1/4 = 0.25*/

let x: number = 2;
let pow: number = 0;
let result: number = x;
let powerVal = Math.abs(pow);


for (let i = 1; i < powerVal; i++) {
    result = result * x;
}
if (pow > 0) { console.log(result); }
else console.log(1 / result);