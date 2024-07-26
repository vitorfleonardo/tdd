function addEvent(schedule, event) {
  for (let i = 0; i < schedule.length; i++) {
    const existingEvent = schedule[i];
    if (
      (event.start >= existingEvent.start && event.start < existingEvent.end) ||
      (event.end > existingEvent.start && event.end <= existingEvent.end) ||
      (event.start <= existingEvent.start && event.end >= existingEvent.end)
    ) {
      return 'conflito de agendamento detectado';
    }
  }
  schedule.push(event);
  return 'evento adicionado com sucesso';
}

module.exports = addEvent;
