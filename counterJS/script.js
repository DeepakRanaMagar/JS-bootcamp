let counterVar = document.getElementById("counter")

console.log(counterVar)

let count = 0

function increment() {
    
    count = count + 1
    
    counterVar.textContent = count
    
    console.log(count)

}