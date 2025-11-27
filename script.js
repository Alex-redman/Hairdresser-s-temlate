const burgerBtn = document.querySelectorAll('.burgerBtn');
const sideMenuLink = document.querySelectorAll('.sideMenu-link');
const sideMenu = document.getElementById('sideMenu');
const bodyElement = document.body;

burgerBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    history.replaceState(null, null, ' ');
    sideMenu.classList.toggle('active')
    bodyElement.classList.toggle('no-scroll');
  });
});

sideMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    bodyElement.classList.remove('no-scroll');
  });
});