// variable for integers
const btnNum = document.querySelectorAll('.btn-num')
// variable for operators
const operators = document.querySelectorAll('.operator')
// variable for clear
const clear = document.querySelectorAll('.clear')
// variable for display
const span= document.getElementById('display-section')

//function to display
function display(number){
    span.innerHTML = span.innerHTML.concat(number.innerHTML)
}

for (let i = 0; i<btnNum.length; i++){

    btnNum[i].onclick=()=>{
    
        display(btnNum[i]);
    
    }
}

//function to perform operation

