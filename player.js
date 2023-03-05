class Player {
  constructor(id) {
  this.id = id;;
  this.wins = 0;
  this.isWinner = false;
  }

  incrementWins() {
    this.wins++;
    this.isWinner = true;
  }

  saveWinsToStorage() {
    JSON.stringify('winsString', this.wins)
    localStorage.setItem('winsString')
    // this.wins >> stringify >> save to local storage
    }
    
  retrieveWinsFromStorage() {
  localStorage.getItem('winsString')
   this.wins = JSON.parse('winsString')   //reassigning this.wins to parsed local storage updated data model with localStorage then display this.wins from local localStorage
   // retrieveWinsFromStorage should only be on page load and updates the data model so that we don't start from 0 each time.
  }
}