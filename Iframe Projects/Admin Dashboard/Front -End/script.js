// Aide Animi
const btn = document.getElementById("directA");
const sidebar = document.getElementById("mainUlAside");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.toggle("is-collapsed");
});

// Aura Card Animi 

function auraClicker() {
  const auraCard = document.getElementById("auraCard");
  auraCard.classList.toggle("aura-collapsed");
}



// Under width menue show  

function menueAsideShow() {
  const menueShow = document.getElementById("mainUlAside");
  menueShow.classList.toggle("asideSH"); // ✅ sahi
}



// Menue closer 

function closerAside() {
  const menueShow = document.getElementById("mainUlAside");
  menueShow.classList.remove("asideSH");
}



// Input Esc card


function goBack() {
  const notifi = document.getElementById("popmain");
  notifi.classList.toggle("plz-collapsed");
}


function escclick() {
  const myInput = document.getElementById("myInput").value;

  if (myInput.trim() === "") {
    alert("Your input is empty!");
    return;
  } else {
    alert("Submitted ✔️");

    window.location.href = "index.html"; // navigation here
  }
}


// Clear Btn 

function clearbtn() {
  document.getElementById("myInput").value = "";
}


//  Password hide show

function togglePasswords() {
  const pass = document.getElementById("passwords");
  const eye = document.getElementById("eyes");

  if (pass.type === "password") {
    pass.type = "text";
    eye.textContent = "🙈";
  } else {
    pass.type = "password";
    eye.textContent = "👁️";
  }
}


function togglePassword() {
  const pass = document.getElementById("password");
  const eye = document.getElementById("eye");

  if (pass.type === "password") {
    pass.type = "text";
    eye.textContent = "🙈";
  } else {
    pass.type = "password";
    eye.textContent = "👁️";
  }
}




// Check Form 
function checkForm() {
  const email = document.getElementById("email").value;
  const passw = document.getElementById("password").value;

  if (email.trim() === "" || passw.trim() === "") {
    alert("Please fill the form!");
  }
}


// Verify Mail

function checkmail() {
  event.preventDefault();
  const forg = document.getElementById("veriEmail").value;
  const otp = document.getElementById("otp").value;

  if (forg.trim() === '') {
    alert("Your mail box is empty!");
  }
  else if (otp.trim() === '') {
    alert("Please enter OTP / confirmation code!");
  }
  else {
    alert("Email verified successfully!");
  }
  document.getElementById("verifyForm").reset();
}



// Sigin up js

function verifyInputs() {

  event.preventDefault();
  const pass1 = document.getElementById("passwords").value;
  const pass2 = document.getElementById("password").value;
  const fName = document.getElementById("fName").value;
  const email = document.getElementById("upmail").value;
  let checkbox = document.getElementById("rememberMe");
  const myForm = document.getElementById("myForm")
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;



  if (fName.trim() === "" || email.trim() === "") {
    alert("Plz fill the Info. !")
  }
  else if (pass1 != pass2) {
    alert("Confirm password does not match.")
  }

  else if (!checkbox.checked) {
    alert("Please follow Terms & Conditions");
  }
  else if (!regex.test(pass1)) {
    alert("Password must be 8+ chars, include uppercase, lowercase, number & special character.");
  }

  else {
    alert("Your account is create now.")
    myForm.reset();
  }

}

// Reset pass js

function resetPass() {
  event.preventDefault();
  const Opass = document.getElementById("Opass").value;
  const Npass = document.getElementById("Npass").value;

  // example: ye tumhara saved old password hai (real app me DB se aata hai)
  const savedOldPassword = "Admin@123";

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // Step 1: old password check
  if (Opass !== savedOldPassword) {
    alert("Your old password is not correct.");
  }

  // Step 2: new password validation
  else if (!regex.test(Npass)) {
    alert("Password must be 8+ chars, include uppercase, lowercase, number & special character.");
  }


  // Step 3: success
  else {
    alert("Password updated successfully.");
    document.getElementById("formReset").reset();
  }
}


// togglePasswordR()


function togglePasswordR() {
  const passR = document.getElementById("Npass");
  const eyeRR = document.getElementById("eyesR");

  if (passR.type === "password") {
    passR.type = "text";
    eyeRR.textContent = "🙈";
  } else {
    passR.type = "password";
    eyeRR.textContent = "👁️";
  }
}


// Otp verification

function verifyOtip() {
  const inputs = document.querySelectorAll(".otpbox");

  let otp = "";
  let isEmpty = false;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      isEmpty = true;
    }
    otp += input.value;
  });

  const correctOTP = "123456";

  // Step 1: empty check
  if (isEmpty) {
    alert("Please fill all OTP boxes !");
  }

  // Step 2: incomplete check
  else if (otp.length < 6) {
    alert("Incomplete OTP !");
  }

  // Step 3: wrong OTP
  else if (otp !== correctOTP) {
    alert("Invalid OTP ❌");
  }

  // Step 4: success
  else {
    alert("OTP Verified Successfully ✅");

    inputs.forEach(input => input.value = "");
  }
}


function sendotp() {
  alert("Otp request accepts.")
}


// Ai chart js 

function okbtn() {
  const inputai = document.getElementById("inputAi");

  if (inputai.value.trim() === "") {
    alert("Plz Ask Any Question !");
  }
  else {
    alert("Your input is Submit");
    inputai.value = ""; // input box clear ho jayega
  }
}


// Slider Ai chart
function showDiv() {
  const div = document.getElementById("div2");
  div.classList.toggle("show");
}



function toggleAiSec() {

  const sector = document.getElementById("collaper");
  sector.classList.toggle("movePlz");

}







// Notifiacation


function showNoti() {
  const notifi = document.getElementById("notifi");
  notifi.classList.toggle("moven");
}

// Graph

