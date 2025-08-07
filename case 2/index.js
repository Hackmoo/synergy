const day = window.prompt("Введите день вашего рождения в цифровом формате");
const month = window.prompt("Введите месяц вашего рождения в цифровом формате");
const year = window.prompt("Введите год вашего рождения в цифровом формате");

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const date = `${year}-${month}-${day}`;

function getDay() {
  const foundDay = new Date(date).getDay();
  return days[foundDay];
}

function isLeapYear() {
  return new Date(year, 1, 29).getMonth() === 1; // Если вернёт true значит високосный
}

function getYear() {
  const start = new Date(date);
  const end = new Date();

  let years = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < start.getDate())) {
    years--;
  }

  return years;
}

function logDate() {
  const template = {
    0: ["***", "* *", "* *", "* *", "***"],
    1: ["  *", "  *", "  *", "  *", "  *"],
    2: ["***", "  *", "***", "*  ", "***"],
    3: ["***", "  *", "***", "  *", "***"],
    4: ["* *", "* *", "***", "  *", "  *"],
    5: ["***", "*  ", "***", "  *", "***"],
    6: ["***", "*  ", "***", "* *", "***"],
    7: ["***", "  *", "  *", "  *", "  *"],
    8: ["***", "* *", "***", "* *", "***"],
    9: ["***", "* *", "***", "  *", "***"],
    "-": ["   ", "   ", "   ", "   ", "   "],
  };
  const splittedDate = date.split('-').reverse().join('-').split('');
  let tableView = [];
  splittedDate.map((el) => tableView.push(template[el]));
  const lines = [[], [], [], [], []];
  for (let i = 0; i < 5; i++) {
    lines[i].push(tableView.map((el) => el[i]));
  }
  for (let i = 0; i < 5; i++) {
    console.log(lines[i][0].join(" "));
  }
  return null;
}

console.log(`Полученный день - ${getDay()}`);
console.log(`Год високосный? - ${isLeapYear() ? "Да" : "Нет"}`);
console.log(`Ваш возраст - ${getYear()}`);
logDate();
