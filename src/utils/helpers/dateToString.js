const dateToString = date => {
  if (!date) return ' ';
  const d = new Date(date);
  const mlist = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = mlist[d.getMonth()];
  const dString = `${d.getDate()} ${month} ${d.getFullYear()}`;

  return dString;
};

export {dateToString};
