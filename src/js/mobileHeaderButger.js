export default () => {
    const burgerButton = document.querySelector('.mobile-header__burger');
    const menu = document.querySelector('.mobile-header-navigation');

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('mobile-header__burger--is-active');
        menu.classList.toggle('mobile-header-navigation--is-opened');
        document.documentElement.classList.toggle('modal--is-opened');
    })
}