// When the user scrolls down numberpx from the top of the document, show the button back-to-top
mybutton = document.getElementById("scrollButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// In mobile menu => auto close navbar when click on navlinks
let button = document.querySelector('button');
let nav = document.querySelector('nav');
let navitems = document.querySelectorAll('.navbar-collapse #nav-items');

button.addEventListener('click', function () {

    nav.classList.toggle('mobilemenu'); //same bg-color with navbar

    for (let i of navitems) {
        i.addEventListener('click', function () {
            button.click();
        });
    }
});

// hide space on the right caused by the AOS library
const aos = document.querySelectorAll('[data-aos]');
for (let i of aos) {
    i.parentNode.classList.add("hideOverflowOnMobile");
}
