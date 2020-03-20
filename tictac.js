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
      console.log('Valid move')
    } else {
      console.log('Invalid move!');
    }
  };
  return { move };
};

// Constants

const squares = document.querySelectorAll('.pos');
const playBtn = document.querySelector('#play');
const gameContainer = document.querySelector('.game-container');

for (let i = 0; i < squares.length; i++) {
  const x = squares[i];
  x.onclick = () => {
    x.style.backgroundColor = 'red';
    console.log(parseInt(x.classList.value.slice(8)));
  }
};

playBtn.onmouseenter = () => {
  const getHeight = function () {
    gameContainer.style.display = 'block';
    var height = gameContainer.scrollHeight + 'px';
    gameContainer.style.display = '';
    return height;
  };

  var height = getHeight();
  gameContainer.classList.add('visible-hover');
  gameContainer.style.height = height;

  window.setTimeout(function () {
		gameContainer.style.height = '';
	}, 350);
};

playBtn.onmouseleave = () => {
  gameContainer.style.height = gameContainer.scrollHeight + 'px';

  window.setTimeout(function () {
		gameContainer.style.height = '0';
  }, 1);
  
  window.setTimeout(function () {
		gameContainer.classList.remove('visible-hover');
	}, 350);
};
