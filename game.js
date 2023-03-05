class Game {
  constructor() {
    this.player1 = new Player('Sir Squeaken the Oak');
    this.player2 = new Player('Sir Floofintail of Nuttingham');
    this.turn = this.player1;
    this.totalPlays = 0;
    this.boardProspects = [
      ['b0', 'b1', 'b2'],
      ['b3', 'b4', 'b5'],
      ['b6', 'b7', 'b8'],
      ['b2', 'b4', 'b6'],
      ['b0', 'b4', 'b8'],
      ['b0', 'b3', 'b6'],
      ['b1', 'b4', 'b7'],
      ['b2', 'b5', 'b8']
    ];

  }
  toggleTurn() {
    if (this.player1 === this.turn) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
  countPlays() {
    this.totalPlays++
  }
  generateValue() {
    for (var i = 0; i < this.boardProspects.length; i++) {
      if (this.boardProspects[i][0] === event.target.id) {
        this.boardProspects[i][0] = this.turn.id
      } else if (this.boardProspects[i][1] === event.target.id) {
        this.boardProspects[i][1] = this.turn.id
      } else if (this.boardProspects[i][2] === event.target.id) {
        this.boardProspects[i][2] = this.turn.id
      }
    }
    this.countPlays();
  }
  checkForWinner() {
    for (var i = 0; i < this.boardProspects.length; i++) {
      if (this.boardProspects[i][0] === this.player1.id && this.boardProspects[i][1] === this.player1.id && this.boardProspects[i][2] === this.player1.id) {
        this.player1.incrementWins();
        // declareWinner();
        disablePlay();
        // this.restartGame();
      } else if (this.boardProspects[i][0] === this.player2.id && this.boardProspects[i][1] === this.player2.id && this.boardProspects[i][2] === this.player2.id) {
        this.player2.incrementWins();
        disablePlay();
        // declareWinner();
        // this.restartGame();
      } else if (this.totalPlays === 9) {
        // declareWinner();
        // this.restartGame();
      }
    }
    declareWinner();
  }
  restartGame() {
    this.boardProspects = [
      ['b0', 'b1', 'b2'],
      ['b3', 'b4', 'b5'],
      ['b6', 'b7', 'b8'],
      ['b2', 'b4', 'b6'],
      ['b0', 'b4', 'b8'],
      ['b0', 'b3', 'b6'],
      ['b1', 'b4', 'b7'],
      ['b2', 'b5', 'b8']
    ];
    this.totalPlays = 0;
    setTimeout(function() {
      clearBoard();
    }, 2000)
  }
};