document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    // const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('https://email.lincsoftwares.tech/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    });

    const result = await response.json();
    const message = document.getElementById('message');

    if (response.ok) {
        message.style.display = 'block';
        message.style.color = 'green';
        message.textContent = result.message

        setTimeout(() => {
            location.reload();
        }, 3000);
    } else {
        message.style.display = 'block';
        message.style.color = 'red';
        message.textContent = result.detail;
    }
});
