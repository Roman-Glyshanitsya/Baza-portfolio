// Выбираем элемент с классом 'hero__gifs-container'
const starWarsElement = document.querySelector('.hero__gifs-container');

// Задержка в 55000 миллисекунд (55 секунд)
setTimeout(() => {
  // Применяем анимацию исчезновения
  starWarsElement.style.transition = 'opacity 1s';
  starWarsElement.style.opacity = '0';

  // Ждем еще 1 секунду, чтобы анимация завершилась, затем удаляем элемент
  setTimeout(() => {
    starWarsElement.remove();
  }, 1000);
}, 55000);

// Задержка в 45000 миллисекунд (45 секунд)
setTimeout(() => {
  // Выбираем все элементы <div> и применяем анимацию исчезновения
  const divElements = document.querySelectorAll('.crawl');
  divElements.forEach(element => {
    element.style.transition = 'opacity 1s';
    element.style.opacity = '0';
  });

  // Ждем еще 1 секунду, чтобы анимации завершились, затем удаляем элементы
  setTimeout(() => {
    divElements.forEach(element => {
      element.remove();
    });
  }, 1000);
}, 45000);
