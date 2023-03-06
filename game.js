class Game {
  constructor() {
  this.player1 = new Player('Wendy the Witch');
  this.player2 = new Player('Zeke the Zombie');
  this.turn = this.player1;
  this.plays = 0;
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
    if(this.player1 === this.turn) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
  
  checkIfWinner() {
    for (var i = 0; i<this.boardProspects.length; i++) {
      if((this.player1.moves.includes(this.boardProspects[i][0])) && (this.player1.moves.includes(this.boardProspects[i][1])) && (this.player1.moves.includes(this.boardProspects[i][2]))) {
        this.player1.isWinner = true;
        return
      }
      if((this.player2.moves.includes(this.boardProspects[i][0])) && (this.player2.moves.includes(this.boardProspects[i][1])) && (this.player2.moves.includes(this.boardProspects[i][2]))) {
        this.player2.isWinner = true;
        return
      }
    }
  }
};