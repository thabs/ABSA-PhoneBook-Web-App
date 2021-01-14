const dateToString = (date) => {
  if (!date) return ' ';
  const d = new Date(date);
  const mlist = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const month = mlist[d.getMonth()];
  const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  const seconds = (d.getSeconds < 10 ? '0' : '') + d.getSeconds();
  const dString = `${d.getDate()} ${month} ${d.getFullYear()}, ${d.getHours()}:${minutes}:${seconds}`;
  return dString;
};

export {dateToString};
