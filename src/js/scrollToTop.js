export function initScrollToTop(selector) {
  const button = document.querySelector(selector);
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}