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
    alert(result.message);
});
