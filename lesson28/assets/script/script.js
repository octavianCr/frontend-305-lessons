// let display = document.getElementById("display");
// let number = document.getElementsByClassName("number")
// console.log(number)
const calculatorScreen = document.getElementById("display");

function numberFunction(n){
    console.log("clicked" + " " + n)
    let number = n
    calculatorScreen.textContent += number
}

function operatorFunction(o){
    console.log("operator")
    let operator = o
    calculatorScreen.textContent += operator
}

function equalFunction(){
    let result = parseFloat(3) + parseFloat(6)
    calculatorScreen.textContent = result
}