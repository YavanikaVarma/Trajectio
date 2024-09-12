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

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simple sign-up validation (for demonstration purposes)
    if (username && email && password) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('signup-results').innerHTML = '<p>Please fill in all fields.</p>';
    }
});

document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});
