class Match extends Card{
   constructor() {
      super();
      this.card = new Card();
   }
   checkForMatch() {
      let cards = document.querySelectorAll('img');
      const optionOneId = this.card.cardsChosenId[0];
      const optionTwoId = this.card.cardsChosenId[1];
      if (cardsChosen[0] === this.card.cardsChosen[1]) {
         // alert("You found a match");
         cards[optionOneId].setAttribute('src',    'images/cross.png');
         cards[optionTwoId].setAttribute('src',    'images/cross.png');
         cardsWon.push(cardsChosen);
      } else {
         cards[optionOneId].setAttribute('src',    'images/bg.png');
         cards[optionTwoId].setAttribute('src',    'images/bg.png');
         // alert("Try again!");
      }
      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = `Score $   {cardsWon.length}`;
      if (cardsWon.length === cardArray.length /   2) {
         resultDisplay.textContent =   "Congratulations, You Win";
      }
   }
}