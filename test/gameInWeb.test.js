import { winCondition } from '../src/domChange';
import { Player, Board } from '../src/ticSet';

const player1 = Player('foo', 'X');
const player2 = Player('bar', 'O');
const winnerField = document.createElement('p');
const board = Board();

test('Player 1 wins with a row', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(0, 'X');
  board.move(1, 'X');
  board.move(2, 'X');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe(`${player1.name} won!`);
});

test('Player 2 wins with a row', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(3, 'O');
  board.move(4, 'O');
  board.move(5, 'O');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe(`${player2.name} won!`);
});

test('Player 1 wins with a column', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(0, 'X');
  board.move(3, 'X');
  board.move(6, 'X');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe(`${player1.name} won!`);
});

test('Player 2 wins with a column', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(1, 'O');
  board.move(4, 'O');
  board.move(7, 'O');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe(`${player2.name} won!`);
});

test('Player 1 wins with a diagonal', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(0, 'X');
  board.move(5, 'X');
  board.move(8, 'X');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe(`${player1.name} won!`);
});

test('Player 2 wins with a diagonal', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(2, 'O');
  board.move(4, 'O');
  board.move(6, 'O');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe(`${player2.name} won!`);
});

test('No one won', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(false);
  board.move(0, 'X');
  board.move(1, 'O');
  board.move(2, 'X');
  board.move(3, 'O');
  board.move(4, 'O');
  board.move(5, 'X');
  board.move(6, 'X');
  board.move(7, 'X');
  board.move(8, 'O');
  winCondition(board, player1, player2, myMock, winnerField);
  expect(winnerField.textContent).toBe('Boring...');
});
