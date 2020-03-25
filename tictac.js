const Player = (name, icon) => {
  return { name, icon };
};

const Board = () => {
  const board = ['','','','','','','','',''];
  const move = (pos, icon) => { board[pos] = icon };
  const empty = () => {for (let index = 0; index < board.length; index++) {
    board[index] = '';
  }};
  return { board, move, empty };
};

const GameFlow = (game, player1, player2) => {
  const move = (pos, icon) => {
    if (game.board[pos] == ''){
      game.move(pos, icon);
      return true;
    } else {
      console.log('Invalid move!');
      return false;
    }
  };
  return { move };
};

// Animations

const squares = document.querySelectorAll('.pos');
const playBtn = document.querySelector('#play');
const gameContainer = document.querySelector('.game-container');
const player1Input = document.querySelector('#player-1');
const player2Input = document.querySelector('#player-2');
const player1Name = document.querySelector('.player-1-name');
const player2Name = document.querySelector('.player-2-name');
const playersShow = document.querySelectorAll('.player-container');
const inputContainer = document.querySelector('.input-container');
const winnerField = document.querySelector('.winner-field');
const winnerDiv = document.querySelector('.winner');
const playAgain = document.querySelector('#play-again')

const InputCheck = (input1, input2) => {
  const boxCheck = (event) => {
    event.addEventListener('input', function(){
      if (event.value.length != 0 && event.value.length < 3) {
        event.style.boxShadow = '0px 0px 5px 2px red';
      } else {
        event.style.boxShadow = '';
      }
    })
  };
  boxCheck(input1);
  boxCheck(input2);
  const readyTG = (event1, event2) => {
    event1.oninput = () => {
      if(event1.value.length >= 3 && event2.value.length >= 3){
        playBtn.style.opacity = '1';
        playBtn.style.pointerEvents = 'inherit';
      } else {
        playBtn.style.opacity = '';
        playBtn.style.pointerEvents = '';
      }
    };
    event2.oninput = () => {
      if(event1.value.length >= 3 && event2.value.length >= 3){
        playBtn.style.opacity = '1';
        playBtn.style.pointerEvents = 'inherit';
      } else {
        playBtn.style.opacity = '';
        playBtn.style.pointerEvents = '';
      }
    };
  };
  readyTG(input1, input2);
};

InputCheck(player1Input, player2Input);

playBtn.onmouseenter = () => {
  gameContainer.style.opacity = '0.3';
};

var nClick = 0;

playBtn.onclick = () => {

  gameContainer.style.opacity = '1';
  gameContainer.style.pointerEvents = 'inherit';
  gameContainer.style.marginTop = '0';

  playBtn.style.pointerEvents = 'none';
  playBtn.style.height = '0';
  playBtn.style.marginTop = '0';
  playBtn.style.opacity = '0';

  player1Name.innerHTML = player1Input.value;
  player2Name.innerHTML = player2Input.value;
  const player1 = Player(player1Input.value, 'X');
  const player2 = Player(player2Input.value, 'O');

  playersShow.forEach( player => {
    player.style.opacity = '1';
  });

  inputContainer.style.marginTop = '0';
  inputContainer.style.opacity = '0';
  inputContainer.style.pointerEvents = 'none';
  inputContainer.style.flexBasis = '20%';
  inputContainer.style.minWidth = '20%';
  
  squares.forEach(square => {
    square.style.width = '120px';
    square.style.height = '120px';
  });
  
  window.setTimeout(function(){
    playBtn.style.visibility = 'hidden';
    inputContainer.style.visibility = 'hidden';
  },1000);

  gamePlay(player1, player2);

  nClick += 1;
};

playBtn.onmouseleave = () => {
  if (nClick == 0){
    gameContainer.style.opacity = '';
  }
};

const afterWin = (places) => {
  places.empty();
  gameContainer.style.pointerEvents = '';
  winnerDiv.style.opacity = '1';
  winnerDiv.style.pointerEvents = 'inherit';
  squares.forEach(square => {
    square.style.width = '';
    square.style.height = '';
    square.style.fontSize = '3em';
  });

  playAgain.onclick = () => {
    squares.forEach( square => {
      square.innerHTML = '';
      square.style.width = '120px';
      square.style.height = '120px';
      square.style.fontSize = '';
    });
    gameContainer.style.pointerEvents = 'inherit';
    winnerDiv.style.opacity = '';
    winnerDiv.style.pointerEvents = '';
  };

  return false;
};

const winCondition = (places, player1, player2) => {
  var board = places.board;
  var anyWinner = true;
  for (let index = 0; index < 3; index++) {
    if (board[3*index] == board[3*index + 1] && board[3*index + 1] == board[3*index + 2] && board[3*index] != '') {
      if (board[3*index] == 'X') {
        winnerField.innerHTML = `${player1.name} won!`;
      } else {
        winnerField.innerHTML = `${player2.name} won!`;
      };
      anyWinner = afterWin(places);
    } else if ( board[index] == board[index + 3] && board[index] == board[index + 6] && board[index] != '') {
      if (board[index] == 'X') {
        winnerField.innerHTML = `${player1.name} won!`;
      } else {
        winnerField.innerHTML = `${player2.name} won!`;
      };
      anyWinner = afterWin(places);
    };
  };
  if (board[0] == board[4] && board[0] == board[8] && board[4] != '') {
    if (board[4] == 'X') {
      winnerField.innerHTML = `${player1.name} won!`;
    } else {
      winnerField.innerHTML = `${player2.name} won!`;
    };
    anyWinner = afterWin(places);
  } else if (board[2] == board[4] && board[2] == board[6] && board[4] != ''){
    if (board[4] == 'X') {
      winnerField.innerHTML = `${player1.name} won!`;
    } else {
      winnerField.innerHTML = `${player2.name} won!`;
    };
    anyWinner = afterWin(places);
  };
  if (anyWinner){
    var posCount = 0;
    board.forEach( position => {
      if(position == ''){
        posCount += 1;
      }
    });
    if (posCount == 0) {
      winnerField.innerHTML ='Boring...';
      afterWin(places);
    }
  };
};

function gamePlay(player1, player2){
  let count = 0;
  var icon = '';
  const board = Board();
  const game = GameFlow(board, player1, player2);
  squares.forEach( square => {
    square.onclick = () => {
      if (count % 2 == 0){
        icon = player1.icon;
      } else {
        icon = player2.icon;
      }
      if (game.move(square.classList.value.slice(8) - 1, icon)){
        square.innerHTML = icon;
        if(count > 3){ winCondition(board, player1, player2) };
        count += 1;
      };
    };
  });  
};
