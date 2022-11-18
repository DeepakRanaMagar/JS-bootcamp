let counterVar = document.getElementById("counter")
let saveVar = document.getElementById("saveData")
let count = 0

function increment() {
    
    count = count + 1
    
    counterVar.innerText = count
    
}

function save() {
    
    let display = count + "-"
    saveVar.textContent += display
    counterVar.textContent = 0
    count = 0
    
}

