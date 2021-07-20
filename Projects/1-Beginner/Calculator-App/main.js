numberBtns = document.querySelectorAll(".numberBtn");
operationBtns = document.querySelectorAll(".operationBtn");
equalBtn = document.querySelector("#equalBtn");
clearBtn = document.querySelector("#clearBtn");
clearAllBtn = document.querySelector("#clearAllBtn");
resultField = document.querySelector(".resultField");

const MAX_DIGITS_FOR_NUMBER = 8

var stack = [];
var currNumber = null;
var operation = null;
var lastPressed = null;

clearAllBtn.addEventListener("click", function() {
    stack = [];
    currNumber = null;
    operation = null;
    updateResultField(currNumber);
});

clearBtn.addEventListener("click", function() {
    currNumber = null;
    updateResultField(currNumber);
});

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", function(){
        if (lastPressed === 'equal'){
            currNumber = null;
            lastPressed = null;
        }

        if (operation != null) {
            stack.push(operation);
            operation = null;
        }

        if (currNumber == null) { 
            currNumber = 0;
        }

        if (currNumber.toString().length < MAX_DIGITS_FOR_NUMBER) {
            currNumber = 10 * currNumber + parseInt(numberBtns[i].innerHTML);
            updateResultField(currNumber);
        }
    });
}

for (let i = 0; i < operationBtns.length; i++) {
    operationBtns[i].addEventListener("click", function () {
        if (stack.length >=2) {
            eval();
        }

        if (currNumber != null){
            stack.push(currNumber);
        } else if (stack.length == 0){
            stack.push(0);
        }

        currNumber = null;
        operation = operationBtns[i].innerHTML;
    });
}

const operations = {
    "+": function addition(num1, num2){
        return num1 + num2;
    },
    "-": function subtraction(num1, num2){
        return num1 - num2;
    },
    "x": function multiplication(num1, num2){
        return num1 * num2;
    },
    "/": function division(num1, num2){
        return num1 / num2;
    }
}

equalBtn.addEventListener("click", () => {
    lastPressed = 'equal';
    eval();
});

function eval() {
    if (stack.length >= 2) {
        var result = operations[stack.pop()](stack.pop(), currNumber);
        currNumber = result;
        updateResultField(result);
    }
}

function updateResultField(result){
    resultField.innerHTML = result;
}

// function printAllVariables(){
//     console.log(currNumber);
//     console.log(stack);
//     console.log(operation);
// }


