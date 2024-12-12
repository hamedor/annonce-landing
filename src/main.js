const burger = document.querySelector('.burger');
const close = document.querySelector('.sidebar-close');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

burger.addEventListener('click', () => {
  sidebar.classList.add('active');
  body.classList.add('body-lock');
});

close.addEventListener('click', () => {
  sidebar.classList.remove('active');
  body.classList.remove('body-lock');
})

document.addEventListener('click', (event) => {
  if (
    !sidebar.contains(event.target) &&
    !burger.contains(event.target) &&
    sidebar.classList.contains('active')
  ) {
    closeSidebar();
  }
});

function closeSidebar() {
  sidebar.classList.remove('active');
  body.classList.remove('body-lock');
}

document.querySelector('.footer-arrow').addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

function createSlider({
                        container,
                        itemsSelector,
                        prevButtonSelector,
                        nextButtonSelector,
                        type = 'transform',
                      }) {
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
}

document.querySelectorAll('.slider-container').forEach((sliderContainer) => {
  createSlider({
    container: sliderContainer,
    itemsSelector: '.slider-item',
    prevButtonSelector: '.slider-prev',
    nextButtonSelector: '.slider-next',
    type: 'transform',
  });
});

document.querySelectorAll('.background-slider').forEach((backgroundSlider) => {
  createSlider({
    container: backgroundSlider,
    itemsSelector: '.background-slide',
    prevButtonSelector: '.slider-prev',
    nextButtonSelector: '.slider-next',
    type: 'fade',
  });
});
