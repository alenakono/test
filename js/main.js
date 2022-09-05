const menuBurger = document.querySelector('.header__menu_mob');

if (menuBurger) {
    const menuBody = document.querySelector('.header-nav_mob');
    menuBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBurger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    menuBody.querySelectorAll('.header__item_mob').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('_lock');
            menuBurger.classList.remove('_active');
            menuBody.classList.remove('_active');
        });
    });
}
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});