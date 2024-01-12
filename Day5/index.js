/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Return '12:01:00'.
Example
s = '12 :01:00PM'

Return '00:01:00'.
s = '12 :01:00PM'
Return '12 :01:00'.
Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
*/


function timeConversion(s) {
    const [time, modifier] = s.split(' ');
    let [hour, min, sec] = time.split(':');
    if (hour === '12') {
        hour = (modifier === 'AM') ? '00' : '12';
        console.log(typeof hour)        
    } else {
        hour = (modifier === 'PM') ? String(parseInt(hour, 10) + 12) : hour;
    }
    return `${hour}:${min}:${sec}`;
       console.log(typeof result  ) 
    return result;
}
console.log(timeConversion("1:05:45 PM"))
/*
HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the grade  and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade  is less than 38 , no rounding occurs as the result will still be a failing grade.

Examples

 grade = 84 round to  (85 - 84 is less than 3)
 grade = 29 do not round (result is less than 40)
grade = 57  do not round (60 - 57 is 3 or higher)
Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.
*/


function gradingStudents(grades) {
 const grade = []   
for(let i = 0; i < grades.length; i++){
const originaValue = parseInt(grades[i])
const ValueToNextMultipleOf5 = Math.ceil(originaValue/5)*5
const diffValue = ValueToNextMultipleOf5 - originaValue
if (originaValue >= 38 && diffValue < 3){
    grade.push(ValueToNextMultipleOf5)
}
else {
     grade.push(originaValue)
}

}
return grade
}
console.log(gradingStudents([30, 73, 80,38]))
