// reservation form
let $submitRSVP = document.getElementById('submit-rsvp');
let $fullName = document.getElementById('full_name');
let $email = document.getElementById('email');
let $telephone = document.getElementById('icon_telephone');

// suggestion form
let $submitSugg = document.getElementById('submit-suggestion');
let $suggestion = document.getElementById('suggestion');

// --------------- EVENT HANDLERS ---------------
// rsvp submission handler
$submitRSVP.addEventListener('click', function(e) {
    e.preventDefault();
    if ($fullName.value.trim() && $email.value.trim() && $telephone.value.trim()) {
        let userForm = {
            full_name: $fullName.value.trim(),
            email: $email.value.trim(),
            phone: $telephone.value.trim()
        };
    
        $("#register-form").empty();
        $('#gonna-spin-register').html(renderSpinner());
    
        $.post('/api/rsvp', userForm)
            .then(response => {
                $('#gonna-spin-register').empty();
                $('#register-form').html(registerSuccess());
        })
    }
})

// suggestion submission handler
$submitSugg.addEventListener('click', function(e) {
    e.preventDefault();
    if ($suggestion.value.trim()) {
        let userForm = {
            suggestion: $suggestion.value.trim()
        };
    
        $('#suggestion').hide();
        $('#gonna-spin-suggestion').html(renderSpinner());
    
        $.post('/api/sugg', userForm)
            .then(response => {
                $('#gonna-spin-suggestion').empty();
                $('#suggestion').show();
                $suggestion.value = '';
        });
    }
});

// ---------- utilities -------------------
function renderSpinner() {
    return ` <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`;
};

function registerSuccess() {
    return  `<h3 class='center font-lobster'>Thank you for registering.  We'll see you soon!</h3>`;
};