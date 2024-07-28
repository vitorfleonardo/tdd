const exitApplication = require('./exit');

test('Exit the application', () => {
  const result = exitApplication();
  expect(result).toBe('Aplicação encerrada');
});
