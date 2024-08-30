//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');

    // Check if there are stored credentials and show the "Login as existing user" button
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (storedUsername && storedPassword) {
        existingButton.style.display = 'block';
    }

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberCheckbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}.`);
    });

    // Handle "Login as existing user" button click
    existingButton.addEventListener('click', function() {
        alert(`Logged in as ${storedUsername}.`);
    });
});
