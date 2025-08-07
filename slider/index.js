import assets from "./assets/index.js"; // Импортирование всех фотографий из assets

const slider = document.getElementById("slider"); // Получение DOM слайдера
const forwardBtn = document.getElementById("forwardBtn"); // Получение кнопки вперёд
const previousBtn = document.getElementById("previousBtn"); // Получение кнопки назад
const counter = document.getElementById('counter') // Получение DOM элемента с текстом текущего слайдера

let currentSlide = 0; // Состояние текущего слайдера
let sliderState = false; // Состояние работы слайдера для запрета быстрых переключений

let pictures = []; // Массив с DOM элементами фотографий

if (assets.length > 0) // Динамически заполняю массив фотографий через папку assets при условии что папка assets не пустая 
  assets.map((el) => {
    let temp = document.createElement("img"); // Создаю и заполняю DOM элемент image
    temp.alt = "Место для фото";
    temp.src = el.src;
    temp.className = "picture";
    pictures = [...pictures, temp]; // Добавляю в массив созданный DOM элемент 
  });

pictures.map((el) => slider.appendChild(el)); // При помощи метода map прикрепляю сгенерированные DOM элементы к слайдеру

forwardBtn.addEventListener("click", () => { // Логика работы кнопки вперёд
  if(sliderState) return; // Проверка на выполнение анимации
  if (currentSlide === assets.length - 1) currentSlide = -1; // Переключение на 1 элемент слайдера при достижении последнего 
  sliderState = true // Блокировка переключения слайдера
  setTimeout(() => { // Разблокировка переключения слайдера
    sliderState = false
  }, 500)
  currentSlide++; // Переключение счёта текущего слайда
  counter.innerHTML = `Текущий слайд: ${currentSlide}` // Замена текста в тексте счётчика 
  slider.style.transform = `translateX(-${100 * currentSlide}%)`; // Логика смены изображения 
});
previousBtn.addEventListener("click", () => { // Логика работы кнопки назад
  if(sliderState) return; // Проверка на выполнение анимации
  if (currentSlide === 0) currentSlide = assets.length; // Переключение на последний элемент слайдера при достижении последнего 
  sliderState = true // Блокировка переключения слайдера
   setTimeout(() => { // Разблокировка переключения слайдера
    sliderState = false 
  }, 500)
  currentSlide--; // Переключение счёта текущего слайда
  counter.innerHTML = `Текущий слайд: ${currentSlide}` // Замена текста в тексте счётчика 
  slider.style.transform = `translateX(-${100 * currentSlide}%)`; // Логика смены изображения 
});
