function removeEvent(schedule, eventName) {
  const index = schedule.findIndex((event) => event.name === eventName);
  if (index !== -1) {
    schedule.splice(index, 1);
    return 'Evento removido com sucesso';
  }
  return 'Evento não encontrado';
}

module.exports = removeEvent;
