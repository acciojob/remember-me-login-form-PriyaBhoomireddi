document.addEventListener('DOMContentLoaded', () => {
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            
            if (storedUsername && storedPassword) {
                document.getElementById('existing').style.display = 'block';
            }

            // Handle existing user login
            document.getElementById('existing').addEventListener('click', () => {
                alert(`Logged in as ${storedUsername}`);
            });
        });

        // Form submission handler
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('checkbox').checked;

            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert(`Logged in as ${username}`);
        });