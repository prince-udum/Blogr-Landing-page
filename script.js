const navlinks = document.querySelector('.navlinks');
const openNav = document.querySelector('.mobile-menu');
const closeNav = document.querySelector('.close-nav');
const subMenu = document.querySelector('.sub-menu');
const arrows = document.querySelectorAll('.arrow-light');

/* toggle nav  */
openNav.addEventListener('click', () => {
    navlinks.classList.add('show-navlinks')
    openNav.style.display = "none"
})

closeNav.addEventListener('click', () => {
    navlinks.classList.remove('show-navlinks')
    openNav.style.display = "block"
})

arrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        if(e.currentTarget.classList.contains('arrow-rotate')){
            e.currentTarget.classList.remove('arrow-rotate')
        }
        else{
             e.currentTarget.classList.add('arrow-rotate')
        }
        const element = e.currentTarget.parentElement.nextElementSibling;
        element.classList.toggle("show-submenu");
        
    })
})