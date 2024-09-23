document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple login validation (for demonstration purposes)
    if (username === 'user' && password === 'password') {
        window.location.href = 'home.html';
    } else {
        document.getElementById('login-results').innerHTML = '<p>Invalid username or password. Please try again.</p>';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // This function will dynamically animate or change the styles
    // if you need further customization or interaction.
    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon, index) => {
        icon.style.animationDuration = `${3 + index}s`;
        icon.style.transition = "all 0.5s ease";
    });

    // Hover interaction: Slight bounce effect
    icons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });
});