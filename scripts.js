let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

$(document).ready(function() {
    // Toggle navbar visibility on menu icon click
    $('#menu-icon').click(function(event) {
        event.stopPropagation(); // Prevents the document click handler from immediately closing the menu
        $('.navbar').toggleClass('active');
    });

    // Close navbar when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar').length && !$(event.target).is('#menu-icon')) {
            $('.navbar').removeClass('active');
        }
    });
});





document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const full_name = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const phone_number = document.getElementById('phone_number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        full_name: full_name,
        email: email,
        phone_number: phone_number,
        subject: subject,
        message: message
    };

    emailjs.send('service_jwdf3iq', 'template_d1jcygh', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message');
        });
});
