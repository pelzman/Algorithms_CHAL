
https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    if( a>t && a>s && a>b) return;
    let appleCount = 0
    let   orangeCount = 0
for (let i=0; i < apples.length; i++){
    let applePosition = a + apples[i]
    let orangePosition = b + oranges[i]
    if(applePosition >= s && applePosition<=t){
        appleCount++    
    }  
    if(orangePosition >=s && orangePosition<=t){
       orangeCount++
    }      
    }
    console.log(appleCount)
    console.log(orangeCount)
}


countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]) 


