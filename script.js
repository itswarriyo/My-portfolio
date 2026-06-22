// function checkForm() {

//     // Page refresh rokne ke liye

//   else{    // Success
//     return true;
// }
// }



//  Show nav bar 


function showNav() {
    const navListShow = document.getElementById("ulList2");
    navListShow.classList.toggle("show-Nav");

}


function removeNav() {
    const navListShow = document.getElementById("ulList2");
    navListShow.classList.remove("show-Nav");

}

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
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        country: formData.get("country"),
        services: formData.get("services"),
        message: formData.get("message"),
    };


    const fName = document.getElementById("fName");
    const emailAdd = document.getElementById("emailAdd");
    const phoneNo = document.getElementById("phoneNo");
    const idSubject = document.getElementById("idSubject");
    const country = document.getElementById("country");
    const slectServices = document.getElementById("slectServices");
    const messaget = document.getElementById("message");

    // Name
    if (fName.value.trim() === "") {
        alert("Please enter your full name!");
        fName.focus();
        return false;
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailAdd.value.trim() === "") {
        alert("Please enter your email!");
        emailAdd.focus();
        return false;
    }

    if (!emailAdd.value.match(emailPattern)) {
        alert("Please enter a valid email address!");
        emailAdd.focus();
        return false;
    }

    // International Phone Number
    // Example: +923001234567
    let phonePattern = /^\+\d{10,15}$/;

    if (phoneNo.value.trim() === "") {
        alert("Please enter your phone number!");
        phoneNo.focus();
        return false;
    }

    if (!phoneNo.value.match(phonePattern)) {
        alert("Please enter a valid international phone number!\nExample: +923001234567");
        phoneNo.focus();
        return false;
    }

    // Subject
    if (idSubject.value.trim() === "") {
        alert("Please enter subject!");
        idSubject.focus();
        return false;
    }

    // Country
    if (country.value === "") {
        alert("Please select your country!");
        country.focus();
        return false;
    }

    // Service
    if (slectServices.value === "") {
        alert("Please select a service!");
        slectServices.focus();
        return false;
    }

    // Message
    if (messaget.value.trim() === "") {
        alert("Please enter your message!");
        messaget.focus();
        return false;
    }

    if (messaget.value.trim().length < 10) {
        alert("Message should be at least 10 characters!");
        messaget.focus();
        return false;
    }


    // axios.post("http://192.168.0.104:8000/api/enquery/insert", formdata)
    axios.post("https://back-end-protfolio-web-2-c7u3.vercel.app/api/enquery/insert", formdata)
        .then((res) => {
            alert("Your information has been submitted successfully. We will contact you soon! ✅");

            console.log(res.data);

            formenquery.reset();
        })
        .catch((err) => {
            console.log(err);
            alert("Error saving data!");
});


    return true;

});
