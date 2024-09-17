document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    function activateLink() {
        let len = sections.length;
        while(--len && window.scrollY + 97 < sections[len].offsetTop) {}
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[len].classList.add('active');
    }

    window.addEventListener('scroll', activateLink);

    // scripts.js

const roles = ['Data Analyst', 'Data Engineer', 'Software Engineer'];
let roleIndex = 0;

const roleElement = document.querySelector('.dynamic-role');

function rotateRoles() {
    roleElement.textContent = roles[roleIndex];
    
    // Add different classes for each role to change color
    roleElement.classList.remove('data-analyst', 'data-engineer', 'software-engineer');
    
    if (roleIndex === 0) {
        roleElement.classList.add('data-analyst');
    } else if (roleIndex === 1) {
        roleElement.classList.add('data-engineer');
    } else if (roleIndex === 2) {
        roleElement.classList.add('software-engineer');
    }

    roleIndex = (roleIndex + 1) % roles.length; // Loop back to the first role after the last one
}

// Rotate roles every 2 seconds
setInterval(rotateRoles, 2000);

});

// Rolling counter animation

function startCounter() {
    let counterElement = document.getElementById('counter');
    let count = 1;
    let maxCount = 10;

    // Function to increment the counter
    function updateCounter() {
        if (count <= maxCount) {
            counterElement.textContent = count;
            count++;
            setTimeout(updateCounter, 100); // Adjust the speed of the rolling effect
        }
    }

    // Start the counter animation
    updateCounter();
}

// Using Intersection Observer to trigger the counter when the user scrolls to the Projects section
document.addEventListener('DOMContentLoaded', function() {
    const counterSection = document.querySelector('.rolling-counter');

    // Options for Intersection Observer
    const options = {
        root: null, // It means viewport
        threshold: 0.5 // Trigger when at least 50% of the section is visible
    };

    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(); // Trigger the counter when the section becomes visible
                observer.unobserve(entry.target); // Stop observing once the counter has started
            }
        });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(counterSection); // Observe the rolling-counter section
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show the success message
    document.getElementById('form-result').style.display = 'block';

    // Optionally clear the form fields after showing the message
    this.reset();
});

const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});




