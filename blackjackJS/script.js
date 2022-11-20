let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardEl = document.getElementById("card-el")


function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum > 10){
        return 10 
    }else if(randomNum === 1){
        return 11
    }else{
        return randomNum
    }
}


function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame(){
    cardEl.textContent = "CARDS: "
    
    for( let i = 0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + "  "    
    }
    
    sumEl.textContent = "SUM: " + sum
    
    if (sum <= 20){
        message = "DO YOU WANT TO DRAW ANOTHER CARD?"
    }else if(sum === 21){
        message = "YOU GOT BLACK JACK"
        hasBlackJack = true
    }else{
        message = "YOU LOST"
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCardDraw(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
  