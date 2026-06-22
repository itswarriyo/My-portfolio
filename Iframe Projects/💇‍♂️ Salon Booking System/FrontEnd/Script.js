const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//  Book Apiontment

// Select ALL book buttons
const bookBtns = document.querySelectorAll(".book-btn");
const popup = document.querySelector(".form-popup");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");

// Open form (for all buttons)
bookBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    popup.classList.add("active");
  });
});

// Close form
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Close on outside click (extra pro feature 🔥)
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});







function alertCall() {
  confirm("Call us at : 03094194640")
}

// Call btn

const callBtns = document.querySelectorAll(".call-btn");

callBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!/Android|iPhone/i.test(navigator.userAgent)) {
      alert("Please use mobile to call.");
    }
  });
});




// ================Fade Section====================


//---------------------- Fade  Section  1 --------------------

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});



// Form hanlde  

let formenquery = document.getElementById("myForm");

formenquery.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(formenquery);

  let formdata = {
    name: formData.get("name"),
    email: formData.get("email"),
    date: formData.get("date"),
    time: formData.get("time"),
    message: formData.get("message")
  };



  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;


  const isValid = Boolean(name && email && date && time);

  if (!isValid) {

    return false;

  }

  else {

    axios.post("http://localhost:8003/api/enquery/insert", formdata)
      .then((res) => {
        alert("Your information has been submitted successfully. We will contact you soon! ✅");

        console.log(res.data);
        formenquery.reset();
        popup.classList.remove("active");

      })
      .catch((err) => {
        console.log(err);
        alert("Error saving data!");
      });

    return true;

  }
});

