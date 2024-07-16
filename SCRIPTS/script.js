// ENLACES DEL NAVBAR
const navbar = document.getElementById('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbar;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// FLECHA HACIA ARRIBA
const flechaArriba = document.querySelector('.flecha-arriba');

window.addEventListener('scroll',(e)=>{
    let currentScrollPosition = window.scrollY;
    if(currentScrollPosition >= 1){
        flechaArriba.style.display = 'block';
    }
    else{
        flechaArriba.style.display = 'none';
    }
});

flechaArriba.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo(top);
});