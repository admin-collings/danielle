let handleNavbarHeight = () => {
    let navbar = document.querySelector('#navbar')
    setInterval(() => {
        if (window.scrollY > 250) {
            navbar.classList.add('fixed-top')
        } else {
            navbar.classList.remove('fixed-top')
        }
    }, 100)
}
handleNavbarHeight()