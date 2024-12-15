import { initBurgerSidebar } from './burgerSidebar.js';
import { initScrollToTop } from './scrollToTop.js';
import { initSliders } from './slider.js';

initBurgerSidebar({
  burgerSelector: '.burger',
  sidebarSelector: '.sidebar',
  closeSelector: '.sidebar-close',
  bodySelector: 'body',
});
initScrollToTop('.footer-arrow');
initSliders('.slider-container', {
  itemsSelector: '.slider-item',
  prevButtonSelector: '.slider-prev',
  nextButtonSelector: '.slider-next',
  type: 'transform',
});
initSliders('.background-slider', {
  itemsSelector: '.background-slide',
  prevButtonSelector: '.slider-prev',
  nextButtonSelector: '.slider-next',
  type: 'fade',
});