const playerFactory = (name, icon) => {
  return { name, icon };
};

const player1 = playerFactory('mike', 'x');
const player2 = playerFactory('lucas', 'o');
const squares = document.querySelectorAll('.pos')
console.log(squares[1])


const board = ['','','','','','','','',''];

const move = (currentPlayer, position) => {
  board[position] = currentPlayer.icon;
  squares[position].innerHTML = currentPlayer.icon;
  console.log(currentPlayer)
  console.log(board)
  checkWinner();
  return board
}


const checkWinner = () => {
  let winningCombos = ["012","345","678","036","147","258","048","642"]
  let map1 = ""
  
  winningCombos.forEach(combo => {
  combo.split("").forEach(digit => {
    map1 += board[digit]
  })
  let result;
  if (map1 == "xxx" || map1 == "ooo") {
      console.log(map1)
      result = true;
  } else {
      result = false;
  }
  });
  }

let currentPlayer = player1;

for (let i = 0; i <5 ; i++) {
move(currentPlayer, prompt());
currentPlayer === player1 ? currentPlayer = player2 : currentPlayer =player1
}
