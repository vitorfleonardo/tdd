function validateInput(event) {
  const dateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
  if (!dateRegex.test(event.start) || !dateRegex.test(event.end)) {
    return 'Formato de data inválido.';
  }
  if (new Date(event.start) >= new Date(event.end)) {
    return 'A data de término não pode ser anterior à data de início.';
  }
  if (event.name.trim() === '') {
    return 'O nome do evento não pode ser vazio.';
  }
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  const startTime = event.start.split(' ')[1];
  const endTime = event.end.split(' ')[1];
  if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
    return 'Formato de hora inválido.';
  }
  return 'Input válido.';
}

module.exports = validateInput;
