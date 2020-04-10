import { Board, GameFlow } from '../src/index';

test('Board instance', () => {
  const board = Board();
  expect(board.board).toBe(['','','','','','','','','']);
});