document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    // const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://127.0.0.1:8000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    });

    const result = await response.json();
    alert(result.message);
});