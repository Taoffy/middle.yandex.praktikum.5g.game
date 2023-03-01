function normalizedTime(timeNumber: number) {
  if (timeNumber < 10) {
    return `0${timeNumber}`;
  }

  return timeNumber;
}

function countdownTimeToString(secondsNumber: number) {
  const minutes = ~~(secondsNumber / 60);
  const seconds = secondsNumber - 60 * minutes;

  const normalizedMinutes = normalizedTime(minutes);
  const normalizedSeconds = normalizedTime(seconds);

  return `${normalizedMinutes}:${normalizedSeconds}`;
}

export { countdownTimeToString };
