test('Testing mocks', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce('10');
  console.log(myMock());
});
