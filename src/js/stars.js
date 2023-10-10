// Создаем звезды
function createStars() {
  const space = document.querySelector('.space');
  const starCount = 400; // Количество звезд

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.left = `${Math.random() * 100}vw`; // Случайное положение по горизонтали
    star.style.top = `${Math.random() * 100}vh`; // Случайное положение по вертикали
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Случайная продолжительность анимации
    space.appendChild(star);
  }
}

// Инициализация звезд
createStars();
