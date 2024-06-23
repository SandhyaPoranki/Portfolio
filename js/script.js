	// Sticky Navbar
    document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
});
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    //Text toggle

document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Frontend Developer", "Pega Developer", "ML Engineer"];
    let index = 0;
    const roleElement = document.getElementById('role');

    function changeRole() {
        roleElement.textContent = roles[index];
        index = (index + 1) % roles.length;
    }

    setInterval(changeRole, 3000); // Change role every 3 seconds (3000 milliseconds)
});

//Skills

document.addEventListener('DOMContentLoaded', function() {
    const skillsItems = document.querySelectorAll('.skills-item');

    skillsItems.forEach(item => {
        const progressBars = item.querySelectorAll('.progress');
        const percentages = item.querySelectorAll('.percentage');

        progressBars.forEach((progress, index) => {
            // You can set the percentage dynamically from your data source
            const width = parseInt(progress.style.width, 10); // Get current width
            progress.style.width = width + '%'; // Update width
            percentages[index].textContent = width + '%'; // Update percentage text
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

    const viewButtons = document.querySelectorAll('.view-certificate');
    const closeButtons = document.querySelectorAll('.close-btn');
    const popups = document.querySelectorAll('.certificate-popup');

    viewButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            popups[index].style.display = 'flex';
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            popups[index].style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        popups.forEach((popup) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});

//projects

document.addEventListener('DOMContentLoaded', function() {
    const showMoreProjectsButton = document.getElementById('show-more-projects-btn');
    const initialItemsToShow = 4; // Number of items to show initially for each category
    let showingAllProjects = false; // Flag to track if all projects are currently shown

    // Function to initialize the project display
    function initializeProjectsDisplay() {
        const allProjects = document.querySelectorAll('.port-box');

        allProjects.forEach((project, index) => {
            if (index >= initialItemsToShow) {
                project.classList.add('hidden-project');
            }
        });

        updateButtonVisibility();
    }

    // Function to update button visibility based on current display state
    function updateButtonVisibility() {
        const hiddenProjects = document.querySelectorAll('.port-box.hidden-project');
        const totalHiddenProjects = hiddenProjects.length;

        if (totalHiddenProjects > 0 && !showingAllProjects) {
            showMoreProjectsButton.style.display = 'block';
        } else {
            showMoreProjectsButton.style.display = 'none';
        }
    }

    // Toggle show more / show less functionality
    showMoreProjectsButton.addEventListener('click', function() {
        const hiddenProjects = document.querySelectorAll('.port-box.hidden-project');

        hiddenProjects.forEach(project => {
            project.classList.toggle('hidden-project');
        });

        showingAllProjects = !showingAllProjects;

        // Change button text based on current state
        if (showingAllProjects) {
            showMoreProjectsButton.textContent = 'Show Less';
        } else {
            showMoreProjectsButton.textContent = 'Show More';
            showOnlyInitialProjects();
            // Scroll to top of projects section when showing less
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Function to show only the initial set of projects
    function showOnlyInitialProjects() {
        const allProjects = document.querySelectorAll('.port-box');

        allProjects.forEach((project, index) => {
            if (index >= initialItemsToShow) {
                project.classList.add('hidden-project');
            }
        });

        showingAllProjects = false;
    }

    // Initialize project display on page load
    initializeProjectsDisplay();
});

//Download The CV 

document.getElementById('download-cv-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link click behavior

    // Open the Google Drive link in a new tab
    window.open(this.href, '_blank');

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1L_Ue9Wx1VwBeLFPBfBpSn_haWbTd5edD';
    link.download = 'SANDHYA PORANKI.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});
















