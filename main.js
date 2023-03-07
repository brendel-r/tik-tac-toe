//Global variables
var game = new Game();

//QuerySelectors
var buttons = document.querySelectorAll('button');
var displayMessage = document.querySelector('h1');
var p1WinDisplay = document.querySelector('.p1-wins');
var p2WinDisplay = document.querySelector('.p2-wins');

//Event Listeners
window.addEventListener('load', addButtonListeners);

//Event Handlers & Functions
function addButtonListeners() {
  console.log('line1')
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
    makeAMove(event)});
  }
};

function makeAMove(event) {
  event.preventDefault();
    for(var i = 0; i < buttons.length; i++) {
      if(game.turn === game.player1 && buttons[i].id === event.target.id) {
        buttons[i].innerHTML = '<img class="token" src="./assets/witchToken.png" id="x">';
        game.player1.moves.push(buttons[i].id)
        game.plays++;
        buttons[i].classList.add('disabled');
        buttons[i].disabled = true;
        game.toggleTurn();
      } else if(game.turn === game.player2 && buttons[i].id === event.target.id) {
          buttons[i].innerHTML = '<img class="token" src="./assets/zombieToken.png" id="o">';
          game.player2.moves.push(buttons[i].id)
          game.plays++;
          buttons[i].classList.add('disabled');
          buttons[i].disabled = true;
          game.toggleTurn();
        }
    }
    game.checkIfWinner();
    changeDisplayMessage();
    checkForWinner();
  }

  function checkForWinner() {
    console.log('line6')
    if(game.player1.isWinner === true || game.player2.isWinner === true || this.game.plays === 9) { 
      for(var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('disabled');
        buttons[i].disabled = true;
      };
      restartGame();
    }
  }
  
  function restartGame() {
    console.log('line7')
    game.resetBoard()
    setTimeout(function clearGame(){
      for(var i = 0; i < buttons.length; i++){
        buttons[i].innerHTML = ``;
        buttons[i].disabled = false;
      };
      switchPlayers();
      
    }, 2000)
  }

  
//Helper Functions

function changeDisplayMessage() {
  console.log('line5')
  if(game.player1.isWinner === true) {
    displayMessage.innerText = `🧹 ${game.player1.id} is the scariest!! 🧹`
    game.player1.wins++;
    p1WinDisplay.innerText = `${game.player1.wins}`
    return
  } else if(game.player2.isWinner === true) {
    displayMessage.innerText = `🧠 ${game.player2.id} is the scariest!! 🧠`
    game.player2.wins++;
    p2WinDisplay.innerText = `${game.player2.wins}`
    return
  } else if(game.player1.isWinner === false && game.player2.isWinner === false && this.game.plays === 9 ) {
    displayMessage.innerText = `I'm not scared at all!! Try again!`
    return
  }
  switchPlayers();
}

function switchPlayers(){
  console.log('line3')
  if(game.turn === game.player1 && game.player1.isWinner === false) {
    displayMessage.innerText = `It's ${game.player1.id}'s Turn`
  } else if(game.turn === game.player2 && game.player2.isWinner === false) {
    displayMessage.innerText = `It's ${game.player2.id}'s Turn`
  }
}


