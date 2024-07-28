const validateInput = require('./validateInput');

test('Invalid date format', () => {
  const event = {
    name: 'Reunião',
    start: 'invalid-date',
    end: '2024-07-26 11:00',
  };
  const result = validateInput(event);
  expect(result).toBe('Formato de data inválido.');
});

test('End date is before start date', () => {
  const event = {
    name: 'Reunião',
    start: '2024-07-26 11:00',
    end: '2024-07-26 10:00',
  };
  const result = validateInput(event);
  expect(result).toBe(
    'A data de término não pode ser anterior à data de início.'
  );
});

test('Empty event name', () => {
  const event = {
    name: '',
    start: '2024-07-26 10:00',
    end: '2024-07-26 11:00',
  };
  const result = validateInput(event);
  expect(result).toBe('O nome do evento não pode ser vazio.');
});

test('Invalid time format', () => {
  const event = {
    name: 'Reunião',
    start: '2024-07-26 25:00',
    end: '2024-07-26 26:00',
  };
  const result = validateInput(event);
  expect(result).toBe('Formato de hora inválido.');
});
