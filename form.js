document.getElementById('submitBtn').addEventListener('click', myfunc);

function myfunc(event) {
    event.preventDefault();

    var name = document.getElementById("userName").value;
    var DOB = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    //Validation
    if (name === '' || DOB === '' || age === '' || email === '' || password === '' || phone === '' || address === '') {
        alert('All fields are required.');
        return;
    }
    
    // Check phone number length
    if (phone.length !== 10 || isNaN(phone)) {
        alert('Phone number must be 10 digits and numeric only.');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    localStorage.setItem('fullName', name);
    localStorage.setItem('dateOfBirth', DOB);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);

    alert('Form submitted successfully!');

    // Clear the form
    document.getElementById("userName").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("age").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("address").value = '';
}
