let a = 1
let b = 2
let sum = a + b
let hasBlackJack = false
let isAlive = true
let message = ""

let msgEl = document.getElementById("msg")
console.log(msgEl)

function drawCard(){
if (sum <= 20){
    message = "DO YOU WANT TO DRAW ANOTHER CARD?"
}else if(sum === 21){
    message = "YOU GOT BLACK JACK"
    hasBlackJack = true
}else{
    message = "YOU LOST"
    isAlive = false
}
}
// //log out 
// console.log(message)   
// }

msgEl.textContent = message
