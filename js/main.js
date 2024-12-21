// loading
window.addEventListener('load', function () {
    const loaderOverlay1 = document.querySelector('.loader-overlay1');
    const loaderOverlay2 = document.querySelector('.loader-overlay2');
    const loader = document.querySelector('.loader');
    const loaderScreen = document.querySelector('.loader-screen');

    console.log(loaderOverlay1, loaderOverlay2);
    
    if (loaderOverlay1 && loaderOverlay2 && loader) {
        loader.classList.add('hide'); 
        loaderOverlay1.classList.add('hide'); 
        loaderOverlay2.classList.add('hide'); 
    }
    setTimeout(() => {
        loaderScreen.classList.add('d-none'); 
    }, 900);
    
});



// overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
    console.log('off');
}

// navbar transformation

var navbar = document.querySelector('#navbar');
var navBrand = document.querySelector('nav .navbar-brand');
var navbarToggler = document.querySelector('.navbar-toggler');
var navItems = document.querySelectorAll('.navbar-expand-lg .navbar-nav .nav-link');

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        navbar.classList.add('navbar-bg');
        navbarToggler.classList.replace('navbar-dark' , 'navbar-light');
        navBrand.classList.replace('text-white', 'main-color');
        navItems.forEach(navItem => {
            navItem.classList.replace('text-white', 'main-color');
        });
    } else {
        navbar.classList.remove('navbar-bg');
        navbarToggler.classList.replace('navbar-light' , 'navbar-dark');
        navBrand.classList.replace('main-color', 'text-white');
        navItems.forEach(navItem => {
            navItem.classList.replace('main-color', 'text-white');
        });
    }
});



// counter recursion
function updateElement(targetNumber, ele) {
    let i = 0;
    function update() {
        if (i <= targetNumber) {
            ele.innerHTML = i;
            i++;
            setTimeout(update, .0001);
        }
    }
    update();
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

// counters
var ele1 = document.getElementById("num1");
updateElement(850, ele1);
var ele2 = document.getElementById("num2");
updateElement(230, ele2);
var ele3 = document.getElementById("num3");
updateElement(950, ele3);
var ele4 = document.getElementById("num4");
updateElement(780, ele4);