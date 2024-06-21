fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });


    const darkModeToggle = document.querySelector('.dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                document.documentElement.style.setProperty('--background-color', '#1a1a1a');
                document.documentElement.style.setProperty('--text-color', '#f0f8ff');
                document.documentElement.style.setProperty('--secondary-text-color', '#ccc');
                darkModeToggle.textContent = '☀️';
            } else {
                document.documentElement.style.setProperty('--background-color', '#f0f8ff');
                document.documentElement.style.setProperty('--text-color', '#333');
                document.documentElement.style.setProperty('--secondary-text-color', '#666');
                darkModeToggle.textContent = '🌙';
            }
        });

        
        
