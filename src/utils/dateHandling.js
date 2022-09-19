const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDate(seconds) {
  const date = new Date(seconds * 1000);
  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
}
