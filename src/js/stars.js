// Stars Create
function createStars() {
  const space = document.querySelector('.space');
  const starCount = 900; // Number of stars
  // const animationDurationFactor = 2; // Фактор увеличения продолжительности анимации

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.animationDuration = `${(Math.random() * 5 + 2) * 3.5}s`; // Увеличенная продолжительность анимации
    space.appendChild(star);
  }
}

// Initialization of stars
createStars();
