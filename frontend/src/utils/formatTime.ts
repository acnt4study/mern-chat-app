export const formatTime = (d) => {
  const date = new Date(d);
  const hrs = padZero(date.getHours());
  const mns = padZero(date.getMinutes());
  return `${hrs}:${mns}`;
};

const padZero = (n) => {
  return n.toString().padStart(2, '0');
};
