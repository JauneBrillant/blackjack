export class Card {
  // const suit = ['H', 'D', 'C', 'S'];
  // const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getRankNumber() {
    if (this.rank == "A") return 11;
    else if (2 <= this.rank && this.rank <= 10) return parseInt(this.rank);
    return 10;
  }
}

// ---------------------- TEST -----------------------------
// const card1 = new Card('H', 'A');
// console.log(card1.getRankNumber());

// const card2 = new Card('D', '2');
// console.log(card2.getRankNumber());

// const card3 = new Card('C', '10');
// console.log(card3.getRankNumber());

// const card4 = new Card('S', 'K');
// console.log(card4.getRankNumber());
