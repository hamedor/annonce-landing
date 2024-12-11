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

document.querySelectorAll('.slider-container').forEach((container) => {
  const slider = container.querySelector('.slider');
  const track = slider.querySelector('.slider-track');
  const prevButton = container.querySelector('.slider-prev');
  const nextButton = container.querySelector('.slider-next');
  const items = track.querySelectorAll('.slider-item');

  let currentIndex = 0;

  function updateSliderPosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
});



