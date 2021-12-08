export default () => {
    const buttonToTop = document.querySelector('.footer__to-top-button')

    if (buttonToTop){
    buttonToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      })
    }
}