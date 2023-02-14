class Deck {
  constructor() {
    this.deck = Deck.generateDeck();
  }

  static generateDeck() {
    let newDeck = [];
    const suit = ['H', 'D', 'C', 'S'];
    const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        newDeck.push(new Card(suit[i], rank[j]));
      }
    }
    return newDeck;
  }

  shuffleDeck() {
    for (let i = 0; i < 52; i++) {
      let random = Math.floor(Math.random() * 53);
      let temp = this.deck[i];
      this.deck[i] = this.deck[random];
      this.deck[random] = temp;
    }
  }

  drawOne() {
    return this.deck.pop();
  }

  resetDeck() {
    const deck = new Deck();
    deck.shuffleDeck();
    return deck;
  }

  printDeck() {
    for (let i = 0; i < Object.keys(this.deck).length; i++) {
      console.log(this.deck[i]);
    }
  }
}

// --------------------- TEST -------------------------
// const deck1 = new Deck();
// deck1.printDeck();
// deck1.shuffleDeck();
// deck1.printDeck();

// console.log(deck1.drawOne());

// deck1.resetDeck();
