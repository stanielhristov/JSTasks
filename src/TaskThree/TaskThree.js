const arr = [
  { date: '10.01.2017', dayOfWeek: 'Tuesday' },
  { date: '05.11.2016', dayOfWeek: 'Saturday' },
  { date: '21.12.2002', dayOfWeek: 'Monday' }
];

function parseDate(dateString) {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
}

arr.sort((a, b) => parseDate(a.date) - parseDate(b.date));

console.log(arr);