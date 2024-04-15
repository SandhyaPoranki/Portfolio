
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => { 
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height)
    {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');
        });
    }

});
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 100); 
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

}
//mix it up projects
//var mixer = mixitup('.projects-gallery');
var mixerProjects = mixitup('.projects-gallery');

// MixItUp for Certificates section
var containerEl = document.querySelector('.certificate-container');
var mixerCertificates = mixitup(containerEl);

//certificates
document.addEventListener('DOMContentLoaded', function() {
    const viewCertificateLinks = document.querySelectorAll('.view-certificate');
    const certificatePopups = document.querySelectorAll('.certificate-popup');
    const closeButtons = document.querySelectorAll('.close-btn');

    viewCertificateLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            certificatePopups[index].style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.certificate-popup').style.display = 'none';
        });
    });
});


//certificates
document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('show-more-btn');
    const hiddenCards = document.querySelectorAll('.certificate-card.hidden');

    showMoreButton.addEventListener('click', function() {
        hiddenCards.forEach(card => {
            card.classList.toggle('hidden'); // Toggle the 'hidden' class
        });
        
        // Change the button text based on its current state
        if (showMoreButton.textContent === 'Show More') {
            showMoreButton.textContent = 'Show Less';
        } else {
            showMoreButton.textContent = 'Show More';
        }
    });
});

//projects

document.addEventListener('DOMContentLoaded', function() {
    const showMoreProjectsButton = document.getElementById('show-more-projects-btn');
    const hiddenProjects = document.querySelectorAll('.port-box.hidden-project');

    showMoreProjectsButton.addEventListener('click', function() {
        hiddenProjects.forEach(project => {
            project.classList.toggle('hidden-project');
        });
        
        // Change button text based on its current state
        if (showMoreProjectsButton.textContent === 'Show More') {
            showMoreProjectsButton.textContent = 'Show Less';
        } else {
            showMoreProjectsButton.textContent = 'Show More';
        }
    });
});
