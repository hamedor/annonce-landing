export function initBurgerSidebar({ burgerSelector, sidebarSelector, closeSelector, bodySelector }) {
  const burger = document.querySelector(burgerSelector);
  const sidebar = document.querySelector(sidebarSelector);
  const close = document.querySelector(closeSelector);
  const body = document.querySelector(bodySelector);

  burger.addEventListener('click', () => {
    sidebar.classList.add('active');
    body.classList.add('body-lock');
  });

  close.addEventListener('click', () => {
    closeSidebar();
  });

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
}