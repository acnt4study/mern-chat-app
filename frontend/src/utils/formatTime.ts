export const formatTime = (d: Date) => {
  const date = new Date(d);
  const hrs = padZero(date.getHours());
  const mns = padZero(date.getMinutes());
  return `${hrs}:${mns}`;
};

const padZero = (n: number) => {
  return n.toString().padStart(2, '0');
};
