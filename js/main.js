 // overlay
 function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
    console.log('off');
}

// navbar transformation
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('#navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            navbar.classList.add('navbar-bg');
        } else {
            navbar.classList.remove('navbar-bg');
        }
    });
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

// counters
var ele1 = document.getElementById("num1");
updateElement(850, ele1);
var ele2 = document.getElementById("num2");
updateElement(230, ele2);
var ele3 = document.getElementById("num3");
updateElement(950, ele3);
var ele4 = document.getElementById("num4");
updateElement(780, ele4);