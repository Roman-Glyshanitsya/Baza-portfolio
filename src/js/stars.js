// Stars Create
function createStars() {
  const space = document.querySelector('.space');
  const starCount = 400; // Number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Random animation duration
    space.appendChild(star);
  }
}

// Initialization of stars
createStars();
