/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 
four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,2,5,4,5]
The minimum sum is 10  and the maximum sum is 14 . The function prints

10 i4
*/


function miniMaxSum(arr) {
    // Write your code here
  let maxSum = 0
  let minSum = 0
     arr.sort((a,b)=>a-b)
     for(let i = 0; i < 4; i++){
        minSum += arr[i]
     }

     for(let i = 1; i < 5; i++){
        maxSum += arr[i]
     }  
       console.log(minSum, maxSum)   
  
}
miniMaxSum([1, 2, 3 ,4, 5])


/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]

The maximum height candles are 4  units high. There are 2 of them, so return 2.

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
*/

function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0
    let maxHeigth =  Math.max(...candles)
    for(let i=0; i < candles.length; i++ ){
        let value = candles[i]       
       if(value === maxHeigth)        
       count++       
    }
    count
}
birthdayCakeCandles([3, 2, 1 ,3])