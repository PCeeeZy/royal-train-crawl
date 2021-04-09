let $submitRSVP = document.getElementById('submit-rsvp');
let $fullName = document.getElementById('full_name');
let $email = document.getElementById('email');
let $telephone = document.getElementById('icon_telephone');



$submitRSVP.addEventListener('click', function(e) {
    e.preventDefault();
    let userForm = {
        full_name: $fullName.value.trim(),
        email: $email.value.trim(),
        phone: $telephone.value.trim()
    }
    console.log(userForm);
    $.post('/api/rsvp', userForm).then(response => {
        console.log(response);
        $('#register-form').html(
            `<h3 class='center font-lobster'>Thank you for registering.  We'll see you soon!</h3>`
        )
    })
})