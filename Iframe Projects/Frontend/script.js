document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Scroll lock only on mobile/tablet
        if (window.innerWidth <= 1024) {
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden'; // scroll disable
            } else {
                document.body.style.overflow = ''; // scroll enable
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            document.body.style.overflow = ''; // Desktop par scroll enable
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = ''; // reset for media query
        }
    });
});



// FQA`S




function btnClecker() {
    const inputs = document.getElementById("questional");

    if (inputs.value.trim() === "") {
        alert("Your question box is empty.");
        return;
    }

    alert("Your Question Was Submitted ✅");
    inputs.value = "";
}


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

let formenquery = document.getElementById("reservationForm");

formenquery.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(formenquery);

    let formdata = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        date: formData.get("date"),
        time: formData.get("time"),
        message: formData.get("message")
    };

        axios.post("http://localhost:8005/api/enquery/insert", formdata)
            .then((res) => {
         alert("Your Reservation Was Booked ✅");

                console.log(res.data);

                formenquery.reset();
            })
            .catch((err) => {
                console.log(err);
                alert("Error saving data!");
            });

        return true;


});

//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>




