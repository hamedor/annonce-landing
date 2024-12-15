function createSlider({ container, itemsSelector, prevButtonSelector, nextButtonSelector, type = 'transform' }) {
  const items = container.querySelectorAll(itemsSelector);
  const prevButton = container.querySelector(prevButtonSelector);
  const nextButton = container.querySelector(nextButtonSelector);

  let currentIndex = 0;

  function updateSlides() {
    if (type === 'transform') {
      const track = container.querySelector('.slider-track');
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (type === 'fade') {
      items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
      });
    }
  }

  prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateSlides();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateSlides();
  });

  updateSlides();

  items.forEach((item) => item.classList.add('no-transition'));
  updateSlides();
  setTimeout(() => {
    items.forEach((item) => item.classList.remove('no-transition'));
  }, 0);
}

export function initSliders(selector, options) {
  document.querySelectorAll(selector).forEach((container) => createSlider({ container, ...options }));
}