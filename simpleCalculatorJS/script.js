const btnNum = document.querySelectorAll(".btn-num");
const operators = document.querySelectorAll(".operator");
const clearAll = document.getElementById("ce");
const clearSingle = document.getElementById("c-single");
const empty = "";
const span = document.getElementById("display-section");


clearSingle.onclick=()=>{
    
    span.innerHTML = span.innerHTML.slice(0,-1)
}

function clear() {
    span.innerHTML = "";
}
clearAll.onclick = () => {
    clear();
};

function appendValue(input) {
    input = span.innerHTML;
    return input;
}


function display(number) {
    span.innerHTML = span.innerHTML.concat(number.innerHTML);
    appendValue(span.innerHTML)
}
for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].onclick = () => {
        display(btnNum[i]);
    };
}

//operators-display

for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = () => {
        display(operators[i]);
    };
}

const equals = operators[5];

equals.onclick = () => {
    
    var ans = parseFloat(eval(appendValue()));
    span.innerHTML = ans
   
};
