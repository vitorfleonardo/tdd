const addEvent = require('./addEvent');

test('Schedule without conflicts', () => {
  const schedule = [];
  const event = {
    name: 'Reunião',
    start: '2024-07-26 10:00',
    end: '2024-07-26 11:00',
  };
  const result = addEvent(schedule, event);
  expect(result).toBe('evento adicionado com sucesso');
  expect(schedule).toContainEqual(event);
});

test('Does not add the event because of conflicts', () => {
  const schedule = [
    {
      name: 'Reunião',
      start: '2024-07-26 10:00',
      end: '2024-07-26 11:00',
    },
  ];
  const conflictingEvent = {
    name: 'Reunião',
    start: '2024-07-26 10:30',
    end: '2024-07-26 11:30',
  };
  const result = addEvent(schedule, conflictingEvent);
  expect(result).toBe('conflito de agendamento detectado');
  expect(schedule).not.toContainEqual(conflictingEvent);
});
