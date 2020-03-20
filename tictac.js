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

// Animations

const squares = document.querySelectorAll('.pos');
const playBtn = document.querySelector('#play');
const gameContainer = document.querySelector('.game-container');

playBtn.onmouseenter = () => {
  gameContainer.style.opacity = '0.3';
};

var nClick = 0;

playBtn.onclick = () => {
  gameContainer.style.opacity = '1';
  gameContainer.style.pointerEvents = 'inherit';
  playBtn.style.pointerEvents = 'none';
  squares.forEach(square => {
    square.style.width = '120px';
    square.style.height = '120px';
  });
  nClick += 1;
}

playBtn.onmouseleave = () => {
  if (nClick == 0){
    gameContainer.style.opacity = '';
  }
};

for (let i = 0; i < squares.length; i++) {
  const x = squares[i];
  x.onclick = () => {
    x.style.backgroundColor = 'red';
    console.log(parseInt(x.classList.value.slice(8)));
  }
};
