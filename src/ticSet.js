const Player = (name, icon) => ({ name, icon });

const Board = () => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const move = (pos, icon) => {
    board[pos] = icon;
  };
  const empty = () => {
    for (let index = 0; index < board.length; index += 1) {
      board[index] = '';
    }
  };
  return { board, move, empty };
};

const GameFlow = (game) => {
  const move = (pos, icon) => {
    if (game.board[pos] === '') {
      game.move(pos, icon);
      return true;
    }
    return false;
  };
  return { move };
};

export { Player, Board, GameFlow };