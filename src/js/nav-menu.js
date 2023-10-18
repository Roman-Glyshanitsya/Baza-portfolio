(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();

// Slide text creator
function createAndAppendText(container, count) {
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.textContent = 'Lorem';
    container.appendChild(span);
  }
}

const slideText = document.querySelectorAll('.slide-text');
slideText.forEach(element => {
  createAndAppendText(element, 20);
});

// Infinite animation
function cloneAndAppend(source, target) {
  const clonedItems = source.cloneNode(true);
  target.appendChild(clonedItems);
}

const slideItems = document.querySelector('.slide-text__items');
const topContent = document.querySelector('.slide-top-text__content');
cloneAndAppend(slideItems, topContent);

const slideBottomItems = document.querySelector('.slide-text__items');
const bottomContent = document.querySelector('.slide-bottom-text__content');
cloneAndAppend(slideBottomItems, bottomContent);
