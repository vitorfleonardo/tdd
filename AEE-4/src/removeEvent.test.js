const removeEvent = require('./removeEvent');

test('Remove event from schedule', () => {
  const schedule = [
    { name: 'Reunião', start: '2024-07-26 10:00', end: '2024-07-26 11:00' },
  ];
  const result = removeEvent(schedule, 'Reunião');
  expect(result).toBe('Evento removido com sucesso');
  expect(schedule).toHaveLength(0);
});

test('Event not found in schedule', () => {
  const schedule = [
    { name: 'Reunião', start: '2024-07-26 10:00', end: '2024-07-26 11:00' },
  ];
  const result = removeEvent(schedule, 'Palestra');
  expect(result).toBe('Evento não encontrado');
  expect(schedule).toHaveLength(1);
});
