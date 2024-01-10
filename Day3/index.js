/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
*/


function plusMinus(arr) {
    // Write your code here
let n = arr.length
let positiveInt = 0
let negativeInt = 0
let zeroInt = 0

//loop through
for(let i = 0; i < arr.length; i++){
    let value = arr[i]    
    if(value > 0 ) positiveInt++
    else if(value < 0) negativeInt++
    else zeroInt++    
}
console.log((positiveInt/n).toFixed(6) ) 
console.log((negativeInt/n).toFixed(6))
 console.log((zeroInt/n).toFixed(6))


}
console.log(plusMinus([1, 1, 0, -1, -1]))

/*
This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
*/

 function staircase(n) {
    // Write your code here
   
    for(let i=1; i <= n; i++){
      const space =  ' '.repeat(n-i) 
      const hash =  "#".repeat(i)
      console.log(space + hash)
      
    }

}
console.log(staircase(4))






   
