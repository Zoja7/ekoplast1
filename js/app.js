window.addEventListener("load", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const headerNav = document.querySelector(".header-menu-list");
  const body = document.body;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-btn--active");
    headerNav.classList.toggle("header-menu-list--active");
    body.classList.toggle("no-scroll");
  });
});
