document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const formData = {
        name: document.getElementById('name').value,
        to_email: document.getElementById('to_email').value,
        message: document.getElementById('message').value
    };
    fetch('https://loko.serv00.net/send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => {
        alert('Error: ' + error);
    });
}
