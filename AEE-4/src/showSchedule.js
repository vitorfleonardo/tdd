function showSchedule(schedule) {
  if (schedule.length === 0) {
    return 'Nenhum evento agendado.';
  }
  let output = '';
  for (let event of schedule) {
    output += `${event.name}: ${event.start} a ${event.end}\n`;
  }
  return output;
}

module.exports = showSchedule;
