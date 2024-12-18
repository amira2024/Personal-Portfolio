// Add interactivity or animations if needed
console.log("Welcome to Amira's Portfolio!");
// Initialize VANTA.GLOBE animation

let vantaEffect = VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xbb0b0b,
    size: 1.10,
    backgroundColor: 0xe8e0e0
});

// Resize Vanta Effect when the window is resized
window.addEventListener("resize", () => {
    if (vantaEffect) vantaEffect.resize();
});


// Form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent form submission to check validation
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation to ensure fields are not empty
    if (name && email && message) {
        alert("Thank you for reaching out! I'll get back to you soon.");
        document.getElementById("contact-form").reset(); // Reset form after submission
    } else {
        alert("Please fill out all fields.");
    }
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('name-error').textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        document.getElementById('email-error').textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('message-error').textContent = "Message is required.";
        isValid = false;
    }

    // If any field is invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#bb0b0b" // Particle color
        },
        shape: {
            type: "circle", // Particle shape
            stroke: {
                width: 2,
                color: "#bb0b0b" // Border color
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 20,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#bb0b0b",
            opacity: 0.6,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
