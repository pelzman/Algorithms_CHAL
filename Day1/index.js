function simpleArraySum(ar) {
    // Write your code here
    let sum = 0 
    for(let i =0; i < ar.length; i++ ){
       sum +=ar[i]
    }
    return sum

}
console.log(simpleArraySum([1,6]))

/*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

Return

int[2]: Alice's score is in the first position, and Bob's score is in the second.
Input Format


Sample Input 0

5 6 7
3 6 10
Sample Output 0

1 1
*/
function compareTriplets(a, b) {
let alice = 0
let bob = 0
const m = []
if(a.length !== b.length)return false
for(let i =0; i < a.length; i++){
  if(a[i] > b[i]) alice++  
  else if (a[i] < b[i]) bob++   
  else '' 
}
m.push(alice, bob)
return m
}
console.log(compareTriplets([5, 6, 7] ,[3, 6, 10]))