const newUserHandler = async (event) => {
    event.preventDefault();
    
    const username = document.getElementById(`name`).value.trim();
    const email = document.getElementById(`email`).value.trim();
    const password = document.getElementById(`password`).value.trim();


    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/posts');
        } else {
            document.getElementById(`tryAgain`).innerHTML = `Error: email is already
            in use, or password is less than 8 characters.`
        }
    };
};


document
.getElementById(`newUserForm`)
.addEventListener(`submit`, newUserHandler)