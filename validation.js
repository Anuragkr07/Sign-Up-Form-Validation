const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('checkpassword');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});





function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();


const numeric= passwordValue.replace(/[^0-9]/g, '').length;

var letters = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ar = alphabet.split("");
    for (var i=0; i<passwordValue.length;i++) {
        if (ar.indexOf(passwordValue[i]) > -1) {
            letters = letters + 1;
        }
    }

var specialChar = passwordValue.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);



if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}
  else if (passwordValue.length < 6) {
    setErrorFor(password, "Password should be atleast 6 characters long!");
  }

  else if (numeric<1) {
    setErrorFor(password, "Must contain one numeric!");
  }

  else if (letters<1) {
    setErrorFor(password, "Must contain one alphabet!");
  }

  else if (specialChar<1) {
    setErrorFor(password, "Must contain one special character!");
  }


  else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
