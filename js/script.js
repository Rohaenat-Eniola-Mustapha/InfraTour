document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected role
    const role = document.querySelector('input[name="role"]:checked').value;

    // Redirect based on the selected role
    if (role === 'community') {
        window.location.href = 'home.html'; // Redirect to home page for community members
    } else {
        alert('This functionality is only available for community members at this time.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected role
    const role = document.querySelector('input[name="role"]:checked').value;

    // Redirect based on the selected role
    if (role === 'community') {
        window.location.href = 'home.html'; // Redirect to home page for community members
    } else {
        alert('This functionality is only available for community members at this time.');
    }
});
