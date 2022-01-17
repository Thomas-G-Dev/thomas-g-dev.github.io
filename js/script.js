//Burger button
const navbarButton = document.getElementsByClassName('navbar-button')[0]
const navbarLinks = document.getElementsByClassName('nav-li')[0]

navbarButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('toggle')
})