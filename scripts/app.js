class Game {
   constructor() {
      this.images = new Images();
      // this.grid = document.querySelector('.grid');
      this.flip = new Flip();
      this.match = new Match();
      this.board = new Board();
   }

   play() {
      this.board.createBoard();
      this.match.checkForMatch();
      this.flip.flipCard();
   }
   
}

let app = new Game();
app.play();