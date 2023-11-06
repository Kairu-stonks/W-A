document.getElementById('name').addEventListener('input', function(e) {
    e.target.style.borderColor = '';
});

document.getElementById('email').addEventListener('input', function(e) {
    e.target.style.borderColor = '';
});

document.getElementById('message').addEventListener('input', function(e) {
    e.target.style.borderColor = '';
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    if(name.value.trim() === '') {
        name.style.borderColor = 'red';
        return;
    }

    if(email.value.trim() === '') {
        email.style.borderColor = 'red';
        return;
    }

    if(message.value.trim() === '') {
        message.style.borderColor = 'red';
        return;
    }

    alert('Message sent successfully!');
});

