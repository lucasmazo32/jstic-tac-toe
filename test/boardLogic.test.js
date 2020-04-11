import { Board, GameFlow, Player } from '../src/ticSet';

test('Board instance', () => {
  const board = Board();
  expect(board.board).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('Board after move', () => {
  const board = Board();
  board.move(5, 'x');
  expect(board.board).toEqual(['', '', '', '', '', 'x', '', '', '']);
});

test('Board after empty', () => {
  const board = Board();
  board.move(5, 'x');
  board.empty();
  expect(board.board).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('Gameflow - testing moves', () => {
  const board = Board();
  const game = GameFlow(board);
  expect(game.move(3, 'x')).toBe(true);
});

test('Gameflow - not allowing repeting moves', () => {
  const board = Board();
  const game = GameFlow(board);
  game.move(3, 'x');
  expect(game.move(3, 'x')).toBe(false);
});

test('Player info', () => {
  const player1 = Player('foo', 'x');
  expect(player1.name).toBe('foo');
});
