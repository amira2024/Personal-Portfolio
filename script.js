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
    color: 0xfcb8ce,
    size: 1.10,
    backgroundColor: 0x454150
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
