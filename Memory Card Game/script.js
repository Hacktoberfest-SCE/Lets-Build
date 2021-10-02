
let moves_counter = document.getElementById("moves_counter")
let score_counter = document.getElementById("score")
let total_cards = 16
let moves = 30
let game = document.getElementById("game-container")
let flag = 0;
let numfliped = 0;
let psymbol = 0;
let items = ['★', '☃', '✎', '✿', '✄', '⌘', '☎', '✈']
items.push(...items)
let score = 0;

moves_counter.innerHTML = moves
score_counter.innerHTML = score;

for (let i = 0; i < total_cards; i++) {
    let card = document.createElement("div")
    let card_inner = document.createElement("div")
    let card_front = document.createElement("div")
    let card_back = document.createElement("div")
    card.className = "flip-card"
    card_inner.className = "flip-card-inner"
    card_front.className = "flip-card-front"
    card_back.className = "flip-card-back"
    let symbol = items[Math.floor(Math.random()*items.length)];
    card_back.innerHTML = symbol;
    let index = items.indexOf(symbol);
    items.splice(index, 1);
    game.append(card)
    card.append(card_inner)
    card_inner.append(card_front)
    card_inner.append(card_back)
    card.addEventListener("click", card_flipper)
}

let pcard = null;

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }


function card_flipper() {
    if (this.classList.contains("flipper") || flag === 1) return;
    if (numfliped % 2 == 0) {
        pcard = this
        console.log(pcard)
        psymbol = this.firstChild.lastChild.innerHTML
        this.classList.add("flipper")
    }
    else {
        this.classList.add("flipper")
        console.log(pcard)
        if (psymbol === this.firstChild.lastChild.innerHTML) {
            score++;
            score_counter.innerHTML = score;
            if (score === total_cards/2) {
                sleep(700).then(() => {
                window.alert("YOU WIN!!")
            })
            }
        }
        else {
            flag = 1;
            sleep(1000).then(() => {
                pcard.classList.remove("flipper")
                this.classList.remove("flipper")
                flag = 0;
            })
        }
        moves--;
        moves_counter.innerHTML = moves;
        if (moves == 0) {
            sleep(700).then(() => {
            window.alert("GAME OVER!! YOU LOSE!!")
            })
        }
    }
    numfliped++;
}
