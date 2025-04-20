// Задача 3.

// Виконуй це завдання у файлі task-3.js

// Уяви що тобі треба відправити поштою посилку, давай визначимо обʼєм цієї посилки:

// 1) Для цього нам треба ширина висота і довжина.

// 2) Напиши функцію figureVolume яка приймає 3 параметри ширину, висоту, довжину нашої посилки.

// 4) функція повертає множення цих параметрів width * height * length

// 5) Нагадую, множення можна виконати лише для цифр, тому спочатку треба буде виділити числа з рядка за допомогою метода чисел Number.parseInt(значення)

function figureVolume(width, height, length) {
  const wid = Number.parseInt(width);
  const hei = Number.parseInt(height);
  const len = Number.parseInt(length);
  return wid * hei * len;
}

console.log(figureVolume("34cм", "25cм", "16cм")); // 13600
console.log(figureVolume("5cм", "5cм", "20cм")); // 500

// Залиш цей код для перевірки ментором.
