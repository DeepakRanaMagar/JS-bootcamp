// variable for integers
const btnNum = document.querySelectorAll('.btn-num')
// variable for operators
const operators = document.querySelectorAll('.operator')
// variable for clear
const clearAll = document.getElementById('ce')
const clearSingle = document.querySelectorAll('.clear-single')
const empty = ""

//to append values to variable 
var currentNum = ""
var perviousNum = ""

function appendValue(){
    currentNum = span.innerHTML
    // console.log(currentNum)
}

// variable for display
const span= document.getElementById('display-section')




//function to display
function display(number){
    span.innerHTML = span.innerHTML.concat(number.innerHTML)
    
}
for (let i = 0; i<btnNum.length; i++){

    btnNum[i].onclick=()=>{
        display(btnNum[i]);
        appendValue()
    }
}




//clear-all garna 
function clear() {
    span.innerHTML=""
}
clearAll.onclick=()=>{
    clear()
}

