const operators = [
    { "+" : plus },
    { "-" : minus },
    { "*" : multiply },
    { "/" : divide },
];

const screen = document.getElementById("screen");

let userNums = [];
let userOperator = "";

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.id !== "equals" && e.target.id !== "clear" && e.target.id !== "del") {
            screen.innerText += e.target.innerText;
        }
        if (e.target.id === "plus" || e.target.id === "minus" || e.target.id === "multiply" || e.target.id === "divide") {
            userOperator = e.target.innerText;
            userNums.push(screen.innerText);
            screen.innerText = "";
        }
        if (e.target.id === "equals") {
            userNums.push(screen.innerText);
            let operatorSelect = operators.find(i => i[userOperator]);
            if (operatorSelect) {
                const result = operatorSelect[userOperator](parseFloat(userNums[0]), parseFloat(userNums[1]));
                screen.innerText = result;
            }
            userNums = [];
            userOperator = "";
        }
        if (e.target.id === "clear") {
            screen.innerText = "";
            userNums = [];
            userOperator = "";
        }
        if (e.target.id === "del") {
            screen.innerText = screen.innerText.slice(0, -1);
        }
    });
});

function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
