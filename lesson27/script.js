// Write a function that accepts 2 numbers and returns -1
//  if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

// let firstNumber = prompt("nr")
// let secondNumber = prompt("nr")

// function numberComparator(){
//     let loggedNumber;
//     if(firstNumber < secondNumber){
//         loggedNumber = -1;
//         console.log(loggedNumber)
//     }else{
//         loggedNumber = 0;
//         console.log(loggedNumber)
//     }
// }
// numberComparator()


// Write a function that counts the factorial of a given number.

// let number = 4;

// function factorial(n){
// let answer = 1;
// if(n == 0 || n == 1){
//     return answer;
// }else{
//     for(let i = 1; i <= n; i++){
//         answer = answer * i;
//     }return answer;
// }

// }
// let n = 5
// let answer = factorial(n)
// console.log(answer)



// Write a function that accepts three separate digits
//  and makes them a number. For example, 1, 4, and 9 will become 149.

// let number1 = prompt("nr")
// let number2 = prompt("nr")
// let number3 = prompt("nr")

// function stickDigits(a, b, c){
//     return("" + a + b + c)
// }
// let stick = stickDigits(number1, number2, number3)
// console.log(stick)



// Write a function that accepts the width and length of a rectangle
//  and calculates its area. If there is only one parameter given, it counts as a square. L*W

// let width = prompt("width");
// let height = prompt("height");

// function area(){
// if(width > 0 && height > 0){
//     return(width * height)
// }else{
//     return(width ** 2 || height **2)
// }
// }

// let result = area()
// console.log(result)



// Write a function that checks if the given number is perfect. A perfect number is a number equal
//  to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

// let number = prompt("nr")

// function perfectNumber(){
// for(let i = 1; i <= number/2; i++){
//     let perfect = 0;
//     if(number%i === 0){
//         perfect = perfect + i;
//     }
//     if(perfect === number ){
//         console.log("perfect")
//     }else{
//         console.log("try again")
//     }

// }
// }
// perfectNumber()


// let number = prompt("nr")

// function is_perfect(number)
// {
// let temp = 0;
//     for(let i=1;i<=number/2;i++)
//     {
//         if(number%i === 0){
        
//             temp += i;
//         }
//     }

//     if(temp === number && temp !== 0)
//         {
//         console.log("It is a perfect number.");
//         } else{
//             console.log("It is not a perfect number.");
//             } 
        
// } 
// is_perfect(parseInt(number)); 

// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers 
// within that range. Use the previous function to check, if numbers are perfect.


// let firstNumber = prompt("fn");
// let secondtNumber = prompt("sn");

// for(let i = parseInt(firstNumber);i <= parseInt(secondtNumber); i++){
//     // console.log(i)
// let number = i
//     function is_perfect(number)
// {
// let temp = 0;
//     for(let i=1;i<=number/2;i++)
//     {
//         if(number%i === 0){
        
//             temp += i;
//         }
//     }

//     if(temp === number && temp !== 0)
//         {
//         console.log(i + " " + "It is a perfect number.");
//         }
// } 
// is_perfect(parseInt(number));
// }

// Write a function that accepts time (hours, minutes, seconds) and returns
//  a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.


// let hours = prompt("hour");
// let minutes = prompt("minute");
// let seconds = prompt("second");

// function dateFunction(h,m,s ) {
//     console.log(typeof(h))
//     console.log(m)

//     if(s === null || s === ""){
//         s = "00"
//     }
//     console.log(s)
//     console.log(typeof(s))

//     let time = "" + h + ":" + " " + m + ":" + " " + s
//     alert("the time is" + ":" + " " +time )
// }

// dateFunction(hours, minutes, seconds)



// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.



// let hours = prompt("hour");
// let minutes = prompt("minute");
// let seconds = prompt("second");

// function secondsFunction(h,m,s ) {
//     h = parseInt(h)
//     m = parseInt(m)
//     s = parseInt(s)

//     m *= 60
//     h = h * (60*60)
//     alert(h + m + s + " " + "Seconds")
// }

// secondsFunction(hours, minutes, seconds)



// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.




// !!!!!!!!!!!!!!!!!!! Unfinished (Could not work out the logic behind the calculator)

// let seconds = prompt("nr sec");
// seconds = parseInt(seconds);
// let minutes = 0;
// let hours = 0;
// let sec = 0

// function secondConvertor(s){

// for (let i = 0; i <= s / 60; i++){
// console.log(s / 60)
//     if(s - 60 > 59){
//         minutes = i;
//     };

// }
// // console.log(minutes)

// for (let i = 0; i <= minutes / 60; i++){
//     if(minutes >= 60){
//         hours =  minutes/60
//     }
// }
// // console.log(hours)

// hours = hours;
// minutes = hours%3600;
// sec = minutes%60

// if(seconds % 60 === 0){
//     sec = 0
//     // console.log(minutes)
// }

// if(sec % 3600 === 0 ){
//     sec = 0
//     minutes = 0
// }

// let operator1 = sec / 3600;
// let decimalPointer = operator1.toString().split(".")[1];
// decimalPointer = parseInt(decimalPointer)
// // console.log(decimalPointer + "dp")

// if(decimalPointer > 0){
//     minutes = 0
// }

// // hours = hours;
// // minutes = hours%3600;
// // sec = minutes%60
// console.log(`${hours} h:${minutes} m: ${sec} s`)

// }

// console.log(3601%3600)

// secondConvertor(seconds)




// seconds = parseInt(seconds)

// let hours = seconds / 3600
// hours = parseInt(hours)
// let minutes = hours / 60
// let sec = minutes / 60



// // console.log(hours, minutes,sec)
// minutes = parseFloat(minutes.toFixed(2))*100

// if(minutes >59){
//     minutes = 0
// }
// console.log(hours, minutes,sec)




// let seconds = prompt("nr sec");

// for(let i = 1; i <= seconds/60; i++){
//     let sec = seconds;
//     let min = 0
//     let hrs = 0

//     if(sec > 59){
//         min += i
//         sec = 1
//         sec++
//     }
//     if(min > 59){
//         hrs++
//         min = 1
//         min++
//     }

//     console.log(`${hrs} h: ${min - 1} m: ${sec -1} s`)
// }




// let seconds = prompt("nr sec");

// let hrs = seconds/3600;
// let something = parseFloat(hrs.toFixed(1))
// let min = ((hrs - something) *100)* 1;
// let somethingMin = parseFloat(min.toFixed(1))
// let sec = ((min - somethingMin)*100)* 1;
// console.log(hrs)
// console.log(min)
// console.log(sec)



// if(seconds <3600){
//     min = seconds/60
//     let somethingMin2 = parseFloat(min.toFixed(1))
//     sec = ((min - somethingMin2)*100)* 1 
// }

// if(seconds > 60){
//     min = min- 1
// }

// if(seconds < 60){
//     sec = seconds
//     console.log(`${hrs.toFixed(0)}H: ${min.toFixed(0) }M: ${sec}S`)
// }else{
//     console.log(`${hrs.toFixed(0)}H: ${min.toFixed(0) }M: ${sec.toFixed(0)}S`)
// }

// console.log(`${hrs.toFixed(0)}H: ${min.toFixed(0) }M: ${sec.toFixed(1)}S`)



