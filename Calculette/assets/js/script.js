// const number
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const comma = document.getElementById("comma");

// const operation
const reset = document.getElementById("reset");
const square = document.getElementById("square");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const plus = document.getElementById("plus");
const less = document.getElementById("less");
const equal = document.getElementById("equal");
let operation = 0; // 0 = rien , 1 = addition , 2 = soustraction , 3 = multipl , 4 = division

let firstCase = document.getElementById("firstCase");
let secondCase = document.getElementById("secondCase");
let thirdCase = document.getElementById("thirdCase");

let indicateur = document.getElementById("calculator");
let caseFind = 1;
let result = 0;

reset.onclick = function(){
    caseFind = 1;
    firstCase.value = "";
    secondCase.value = "";
    thirdCase.classList.add("invisible");
    operation = 0;
    indicateur.innerText = "";
}

zero.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 0;
    } else {
        secondCase.value += 0;
    }
}

one.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 1;
    } else {
        secondCase.value += 1;
    }
}

two.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 2;
    } else {
        secondCase.value += 2;
    }
}

three.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 3;
    } else {
        secondCase.value += 3;
    }
}

four.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 4;
    } else {
        secondCase.value += 4;
    }
}

five.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 5;
    } else {
        secondCase.value += 5;
    }
}

six.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 6;
    } else {
        secondCase.value += 6;
    }
}

seven.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 7;
    } else {
        secondCase.value += 7;
    }
}

eight.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 8;
    } else {
        secondCase.value += 8;
    }
}

nine.onclick = function(){
    if (caseFind == 1){
        firstCase.value += 9;
    } else {
        secondCase.value += 9;
    }
}

comma.onclick = function(){
    if (caseFind == 1){
        firstCase.value += ".";
    } else {
        secondCase.value += ".";
    }
}

plus.onclick = function(){
    caseFind = 2;
    operation = 1;
    indicateur.innerText = "+";
}

less.onclick = function(){
    caseFind = 2;
    operation = 2;
    indicateur.innerText = "-";
}

multiplication.onclick = function(){
    caseFind = 2;
    operation = 3;
    indicateur.innerText = "*";
}

division.onclick = function(){
    caseFind = 2;
    operation = 4;
    indicateur.innerText = "/";
}

square.onclick = function(){
    caseFind = 1;
    result = parseFloat(firstCase.value) * parseFloat(firstCase.value);
    thirdCase.value = result;
    thirdCase.classList.remove("invisible");
    secondCase.value = "au carré";
}

equal.onclick = function(){
    if (operation == 0) {
        alert("NOPE !");
        caseFind = 1;
    } else if(operation == 1) {
        result = parseFloat(firstCase.value) + parseFloat(secondCase.value);
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
    } else if(operation == 2) {
        result = parseFloat(firstCase.value) - parseFloat(secondCase.value);
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
    } else if(operation == 3) {
        result = parseFloat(firstCase.value) * parseFloat(secondCase.value);
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
    } else if(operation == 4) {
        result = parseFloat(firstCase.value) / parseFloat(secondCase.value);
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
    }
}