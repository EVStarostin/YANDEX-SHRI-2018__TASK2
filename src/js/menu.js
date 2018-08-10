/* Показывать/прятать меню при клике по кнопке */
document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('visible');
    document.querySelector('.header-and-main').classList.toggle('menu-visible');
});