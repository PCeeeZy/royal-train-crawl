// reservation form
let $submitRSVP = document.getElementById('submit-rsvp');
let $fullName = document.getElementById('full_name');
let $email = document.getElementById('email');
let $telephone = document.getElementById('icon_telephone');

// suggestion form
let $submitSugg = document.getElementById('submit-suggestion');
let $suggestion = document.getElementById('suggestion');

// media form
let $mediaInputElement = document.getElementById("actual-media");
let $mediaSubmit = document.getElementById("submit-media");

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

// media submission handler
$mediaSubmit.addEventListener("click", handleFiles);

function handleFiles(event) {
  event.preventDefault();
  console.log('is this click even working')
  // DO THE SPINNER
  // ----------------------
  var formData = new FormData();
  let file = $mediaInputElement.files[0];
  // check filetype
  // if (!file.type.match('image.*')) {
  //   // warn user of filetype
  //   // ----------------------
  //   return;
  // }

  // append file to the ajax req
  formData.append('fileAjax', file, file.name);
  // set up the request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/media', true);
  xhr.onload = function() {
    if (xhr.status == 200) {
      //upload complete
    } else {
      // upload error
    }
  }
  xhr.send(formData);
  
/* now you can work with the file list */
}


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