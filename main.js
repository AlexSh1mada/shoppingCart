document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('scroll', () => {
        let navBar = document.querySelector('nav');
        if(window.scrollY > 0) {
            navBar.style.backgroundColor = '#FFEDD8';
            navBar.style.boxShadow = '0 2.5px 15px rgba(137, 22, 82, 0.4)'
        }
        else {
            navBar.style.backGroundColor = 'transparent'
            navBar.style.boxShadow = 'none'
        }
    })
})