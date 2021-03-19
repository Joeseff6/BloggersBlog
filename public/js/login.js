const loginHandler = async (event) => {
    event.preventDefault();
    // TODO: Fix ids in login view to match below variables 
    const email = document.getElementById(`email`).value.trim();
    const password = document.getElementById(`password`).value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    };
};