function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }

const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const deck = [];
for (const suit of suits) {
    for (const value of values) {
        deck.push(new Card(value, suit));
    }
}

function drawHand() {
    const cardHandDiv = document.getElementById('card-hand');
    cardHandDiv.innerHTML = ''; // Clear the currently displayed hand.
  
    const hand = [];
  
    // Draw 5 unique cards from the deck.
    while (hand.length < 5) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const selectedCard = deck[randomIndex];
  
      // Avoid reusing cards that have been shown.
      if (!hand.includes(selectedCard)) {
        hand.push(selectedCard);
        const cardName = selectedCard.value === 'Ace' || selectedCard.value === 'King' || selectedCard.value === 'Queen' || selectedCard.value === 'Jack'
          ? selectedCard.value + ' of ' + selectedCard.suit
          : selectedCard.value + ' of ' + selectedCard.suit + 's';
        const cardText = document.createTextNode('- ' + cardName);
        cardHandDiv.appendChild(cardText);
        cardHandDiv.appendChild(document.createElement('br'));
      }
    }
  }


const drawButton = document.getElementById('draw-button');
drawButton.addEventListener('click', drawHand);