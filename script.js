// For Responsive menu menu icon navbaar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




// For sticky navbar and it will become transperant when it goes on the top

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
// >>> from here to 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =  sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
// << This script is just used to set the active link on the current page and the above vairable sections and navLinks are also the parts of this script only


    // ========This is for sticky Navbar=============
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


// This is to remove the toggle icon in responsive when a command is clicked 

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


// This JS is for Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// =============This is for Dark light Mode 

let darkmodeIcon = document.querySelector('#darkMode-icon');

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

// =========This is for Scroll Reveal ====== //

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-container, .testimonal-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });



//   ============= This JS let the user to send the details through contact form page 

  document.getElementById('contect-form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.from_name.value = event.target[3].values

    emailjs.sendForm('service_4xrm5fl', 'template_fs17y3f', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});
