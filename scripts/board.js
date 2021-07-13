class Board {
   constructor() {
      this.images = new Images();
      this.grid = document.querySelector('.grid');
   }
   createBoard() {
      for (let i = 0; i < this.images.cardArray.length; i++) {
         let card = document.createElement('img');
         card.setAttribute('src', 'images/bg.png');
         card.setAttribute('data-id', i);
         // card.addEventListener('click', flipCard);
         this.grid.append(card);
      }
   }
}