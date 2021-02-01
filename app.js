document.addEventListener('DOMContentLoaded', () => {

// Card options
const cardArray = [
{name:'cheesburger', 
img: 'images/cheesburger.png'
},
{name:'fries', 
img: 'images/fries.png'
},
{name:'hotdog', 
img: 'images/hotdog.png'
},
{name:'ice-cream', 
img: 'images/ice-cream.png'
},
{name:'milkshake', 
img: 'images/milkshake.png'
},
{name:'pizza', 
img: 'images/pizza.png'
},
{name:'cheesburger', 
img: 'images/cheesburger.png'
},
{name:'fries', 
img: 'images/fries.png'
},
{name:'hotdog', 
img: 'images/hotdog.png'
},
{name:'ice-cream', 
img: 'images/ice-cream.png'
},
{name:'milkshake', 
img: 'images/milkshake.png'
},
{name:'pizza', 
img: 'images/pizza.png'
}
]


const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []

// gameboard

function createBoard(){
    for(let i=0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if( cardsChosen[0] === cardsChosen[1])
    alert('Tou have found a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
}

// flip the card
function flipCard(){
    var cardId = this.getAttribute(data-id)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length = 2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()





})