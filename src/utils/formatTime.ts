export const formatTime = (secondsTotal: number) => {
  const hours = Math.floor(secondsTotal / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  const timeParts: string[] = [];

  if (hours) {
    // TODO: to be discuss
  }

  if (minutes) timeParts.push(`${minutes}m`);
  if (seconds) timeParts.push(`${seconds}s`);

  return timeParts.join(' ');
};
