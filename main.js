//Global variables
var game = new Game();

//QuerySelectors
var buttons = document.querySelectorAll('button');
var message = document.querySelector('h1');

//Event Listeners
window.addEventListener('load', addButtonListeners);

//Event Handlers & Functions
function addButtonListeners() {
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
    makeAMove(event)});
  }
};

function makeAMove(event) {
  for(var i = 0; i < buttons.length; i++) {
    if(game.turn === game.player1 && buttons[i].id === event.target.id) {
    buttons[i].innerHTML = '<img class="token" src="./assets/witchToken.png" id="x">';
  } else if(game.turn === game.player2 && buttons[i].id === event.target.id) {
      buttons[i].innerHTML = '<img class="token" src="./assets/zombieToken.png" id="o">';
    }
  }
  game.generateValue();
  game.checkForWinner();
  game.toggleTurn();
  changeMessage();
};

//Helper Functions

function changeMessage() {
  if(game.turn === game.player1) {
    message.innerText = `It's ${game.player1.id}'s Turn'`
  } else if(game.turn === game.player2) {
    message.innerText = `It's ${game.player2.id}'s Turn'`
  }
};