const showSchedule = require('./showSchedule');

test('Show multiple events in schedule', () => {
  const schedule = [
    { name: 'Reunião', start: '2024-07-26 10:00', end: '2024-07-26 11:00' },
    { name: 'Palestra', start: '2024-07-27 14:00', end: '2024-07-27 15:00' },
  ];
  const result = showSchedule(schedule);
  expect(result).toBe(
    'Reunião: 2024-07-26 10:00 a 2024-07-26 11:00\n' +
      'Palestra: 2024-07-27 14:00 a 2024-07-27 15:00\n'
  );
});
