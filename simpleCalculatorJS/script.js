const btnNum = document.querySelectorAll(".btn-num");
const operators = document.querySelectorAll(".operator");
const clearAll = document.getElementById("ce");
const clearSingle = document.querySelectorAll(".clear-single");
const empty = "";


var input

function appendValue() {
    input = span.innerHTML;
    return input;
}

const span = document.getElementById("display-section");

function display(number) {
    span.innerHTML = span.innerHTML.concat(number.innerHTML);
    appendValue(span.innerHTML)
}
for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].onclick = () => {
        display(btnNum[i]);
    };
}

for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = () => {
        display(operators[i]);
    };
}

function clear() {
    span.innerHTML = "";
}
clearAll.onclick = () => {
    clear();
};

const equals = operators[5];

equals.onclick = () => {
    var ans= (appendValue());
    console.log(ans);
    // console.log(7*10)
};
