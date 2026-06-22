// Lang Section 

{
  const selected = document.getElementById("selectedLang");
  const options = document.querySelectorAll(".langOption");

  // Toggle list visibility
  selected.addEventListener("click", () => {
    options.forEach(opt => {
      opt.style.display = (opt.style.display === "flex") ? "none" : "flex";
    });
  });

  // Handle selection
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      // Change default selected text
      selected.innerHTML = `${opt.innerHTML} 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"></polyline>
</svg>`;
      // Hide options
      options.forEach(o => (o.style.display = "none"));
    });
  });

}


// Location Popup

const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  card.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  card.style.display = "none";
});


const searchInput = document.querySelector(".card-content input");
const locations = document.querySelectorAll(".location p");

searchInput.addEventListener("keyup", () => {
  let value = searchInput.value.toLowerCase();

  locations.forEach(item => {
    let text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "flex";

      // matched item ko top par le aao
      item.parentNode.prepend(item);
    } else {
      item.style.display = "none";
    }
  });
});


// All departments  popup

const allDepartmentsBtn = document.getElementById("allDepartmentsBtn");
const departmentsCard = document.getElementById("departmentsCard");

allDepartmentsBtn.addEventListener("click", () => {
  departmentsCard.style.display =
    departmentsCard.style.display === "block" ? "none" : "block";
});

// click outside close
document.addEventListener("click", (e) => {
  if (
    !allDepartmentsBtn.contains(e.target) &&
    !departmentsCard.contains(e.target)
  ) {
    departmentsCard.style.display = "none";
  }
});


// Dropdown Menue

const allDepartmentsBtn2 = document.getElementById("allDepartmentsBtn2");
const departmentsCard2 = document.getElementById("departmentsCard2");

allDepartmentsBtn2.addEventListener("click", () => {
  departmentsCard2.style.display =
    departmentsCard2.style.display === "block" ? "none" : "block";
});

// click outside close
document.addEventListener("click", (e) => {
  if (
    !allDepartmentsBtn2.contains(e.target) &&
    !departmentsCard2.contains(e.target)
  ) {
    departmentsCard2.style.display = "no  ne";
  }
});

// shooping cart popup

let cart = document.getElementById("cart");
let cartIcon = document.getElementById("cartIcon");
let closeCart = document.getElementById("closeCart");

// OPEN CART
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

// CLOSE CART
closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// PLUS / MINUS
document.querySelectorAll(".item").forEach(item => {
  let plus = item.querySelector(".plus");
  let minus = item.querySelector(".minus");
  let count = item.querySelector(".count");

  plus.addEventListener("click", () => {
    count.innerText = parseInt(count.innerText) + 1;
  });

  minus.addEventListener("click", () => {
    if (count.innerText > 1) {
      count.innerText = parseInt(count.innerText) - 1;
    }
  });
});

// BUTTON ALERTS


document.getElementById("draftBtn").addEventListener("click", () => {
  alert("Saved as Draft 📝");
  cart.classList.remove("active");
});

// Img Anmi js 

let first = document.getElementById("imgAnmi");
let second = document.getElementById("imgAnmi2");

let showingFirst = true;

setInterval(() => {
  if (showingFirst) {
    first.classList.add("hide");
    second.classList.add("active");
  } else {
    second.classList.remove("active");
    first.classList.remove("hide");
  }

  showingFirst = !showingFirst;
}, 5000);

document.addEventListener("DOMContentLoaded", function () {

  const scrollContainer = document.getElementById("cardSec");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  // Drag Scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  // Button Scroll (Manual Only)
  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

});




// Remover cart


function toggleCart(id) {

  let item = document.getElementById(id);

  if (item.style.display === "none") {
    item.style.display = "flex";
  }
  else {
    item.style.display = "none";
  }

}


// Serch products 

function searchProduct() {

  let input = document.getElementById("searchInput").value.toLowerCase().trim();

  // Empty input check
  if (input === "") {
    alert("Plz enter a product name!");
    return;
  }

  let product = document.getElementById(input);

  let old = document.querySelectorAll(".highlight-product");

  old.forEach(item => {
    item.classList.remove("highlight-product");
    item.style.border = "";
  });

  if (product) {

    product.scrollIntoView({ behavior: "smooth" });

    product.classList.add("highlight-product");
    product.style.border = "4px solid red";

  }
  else {

    alert("❌ Product not found!");

  }
}




function googleTranslateElementInit() {

  new google.translate.TranslateElement(
    {
      pageLanguage: 'en'
    },
    'google_translate_element'
  );

}


// Location p 
const allLocationP = document.querySelectorAll(".location p");

allLocationP.forEach((item) => {

  item.addEventListener("click", () => {

    allLocationP.forEach((p) => {
      p.classList.remove("active");
    });

    item.classList.add("active");

    setTimeout(() => {
      item.classList.remove("active");
      alert(`You have selected: ${item.innerText} =) : For your delivery location.`);

    }, 400);


  });

});



// like Section

const hearts = document.querySelectorAll(".icons span:first-child");

const likeSect = document.getElementById("likeSect");



hearts.forEach((heart) => {

  heart.addEventListener("click", () => {

    // CURRENT PRODUCT
    let productBox = heart.closest(".boxin");

    // COPY PRODUCT

    let clone = productBox.cloneNode(true);

    // REMOVE BUTTON CREATE
    let removeBtn = document.createElement("button");

    removeBtn.innerText = "Remove";
    removeBtn.classList.add("removeBtn");





    // BUTTON PRODUCT KEY NICHE ADD
    clone.appendChild(removeBtn);





    // LIKE SECTION MEY PRODUCT ADD
    likeSect.appendChild(clone);





    // REMOVE FUNCTION
    removeBtn.addEventListener("click", () => {

      clone.remove();

    });




    alert("Product added to your favorites! ❤️");

  });

});


// Liker Section Show 

function likersect() {
  const likeSect = document.getElementById("likeSect");
  const closerLike = likeSect.querySelector("span");

  closerLike.addEventListener("click", () => {
    likeSect.classList.remove("likeactive");
  });
  likeSect.classList.toggle("likeactive");
}


document.addEventListener('click', (e) => {

  if (e.target.classList.contains('addbtn')) {

    alert("Your product add to cart now.✔️")
  }

});

// Header input clear


function clearinpu() {
  const inputHead = document.getElementById("searchInput");

  inputHead.value = "";
  // inputHead.value = "I love you ❤️😊";
  // inputHead.style.backgroundColor = "red";
  //   inputHead.style.color = "white";
  //     inputHead.style.textAlign = "center";

}









const cartContainer = document.getElementById("cart");

document.addEventListener("click", function (e) {

  if (e.target.classList.contains("addbtn")) {

    // CURRENT PRODUCT BOX
    const currentProduct = e.target.closest(".boxin");



    // PRODUCT DATA
    const productName =
      currentProduct.querySelector("h3").innerText;

    const productImage =
      currentProduct.querySelector("img").src;

    const productPrice =
      currentProduct.querySelector("span[style*='font-size']").innerText;




    // CREATE CART ITEM
    const cartProduct = document.createElement("div");

    cartProduct.classList.add("item");



    cartProduct.innerHTML = `
      <div class="item" id="cartItem10">
      <p class="title">${productName}</p>

      <div class="imgSho">
        <img src="${productImage}" width="80px" >
      </div>

      <div class="qty">
        <button class="minus">-</button>
        <span class="count">1</span>
        <button class="plus">+</button>
      </div>

      <p>${productPrice}</p>

      <button class="removeBtn">🗑️ Remove / Add</button>
</div>
    `;




    // ADD TO CART
    cartContainer.appendChild(cartProduct);





    // REMOVE PRODUCT
    const removeButton =
      cartProduct.querySelector(".removeBtn");

    removeButton.addEventListener("click", function () {

      cartProduct.remove();

    });

  }

});




// Form country 

const country = document.getElementById("country");
const city = document.getElementById("city");


const allCities = {

  /* ================= ASIA ================= */

  Pakistan: [
    "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad",
    "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
    "Hyderabad", "Bahawalpur", "Sargodha", "Abbottabad", "Murree"
  ],

  India: [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
    "Surat", "Kanpur", "Nagpur", "Indore", "Goa"
  ],

  China: [
    "Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Wuhan",
    "Chengdu", "Nanjing", "Hangzhou", "Tianjin", "Xi'an",
    "Suzhou", "Chongqing", "Harbin", "Qingdao", "Dalian"
  ],

  Japan: [
    "Tokyo", "Osaka", "Kyoto", "Nagoya", "Hiroshima",
    "Sapporo", "Fukuoka", "Kobe", "Yokohama", "Nara",
    "Okinawa", "Kawasaki", "Sendai", "Nagano", "Niigata"
  ],

  Bangladesh: [
    "Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi",
    "Barisal", "Comilla", "Rangpur", "Gazipur", "Narayanganj",
    "Mymensingh", "Cox's Bazar", "Jessore", "Dinajpur", "Bogra"
  ],

  "Sri Lanka": [
    "Colombo", "Kandy", "Galle", "Jaffna", "Negombo",
    "Matara", "Anuradhapura", "Trincomalee", "Batticaloa", "Kurunegala",
    "Badulla", "Ratnapura", "Kalutara", "Nuwara Eliya", "Polonnaruwa"
  ],

  Nepal: [
    "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar",
    "Janakpur", "Butwal", "Dharan", "Hetauda", "Nepalgunj",
    "Itahari", "Bharatpur", "Birgunj", "Dhangadhi", "Tulsipur"
  ],

  Thailand: [
    "Bangkok", "Chiang Mai", "Pattaya", "Phuket", "Krabi",
    "Ayutthaya", "Chiang Rai", "Surat Thani", "Hat Yai", "Udon Thani",
    "Kanchanaburi", "Hua Hin", "Samui", "Lampang", "Nakhon Ratchasima"
  ],

  Indonesia: [
    "Jakarta", "Bali", "Bandung", "Surabaya", "Medan",
    "Yogyakarta", "Semarang", "Makassar", "Palembang", "Bekasi",
    "Depok", "Bogor", "Malang", "Batam", "Denpasar"
  ],

  Malaysia: [
    "Kuala Lumpur", "Johor Bahru", "Penang", "Ipoh", "Kota Kinabalu",
    "Malacca", "Kuching", "Shah Alam", "Petaling Jaya", "Miri",
    "Seremban", "Putrajaya", "Kuantan", "Alor Setar", "Sandakan"
  ],

  /* ================= MIDDLE EAST ================= */

  "Saudi Arabia": [
    "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam",
    "Taif", "Tabuk", "Abha", "Khobar", "Yanbu",
    "Najran", "Jizan", "Hail", "Buraydah", "Al Jubail"
  ],

  "United Arab Emirates": [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah",
    "Al Ain", "Ras Al Khaimah", "Umm Al Quwain", "Khor Fakkan", "Dibba",
    "Kalba", "Madinat Zayed", "Liwa", "Jebel Ali", "Al Dhaid"
  ],

  Qatar: [
    "Doha", "Al Rayyan", "Al Wakrah", "Lusail", "Umm Salal",
    "Al Khor", "Mesaieed", "Dukhan", "Al Shamal", "Zubarah",
    "Ruwais", "Abu Samra", "Madinat ash Shamal", "Al Wukair", "Al Daayen"
  ],

  Kuwait: [
    "Kuwait City", "Hawalli", "Salmiya", "Farwaniya", "Ahmadi",
    "Jahra", "Mangaf", "Fahaheel", "Sabah Al Salem", "Mahboula",
    "Khaitan", "Jleeb", "Abdali", "Shuwaikh", "Mubarak Al Kabeer"
  ],

  Oman: [
    "Muscat", "Salalah", "Sohar", "Nizwa", "Sur",
    "Bahla", "Rustaq", "Ibri", "Khasab", "Duqm",
    "Seeb", "Barka", "Shinas", "Bidbid", "Ibra"
  ],

  Bahrain: [
    "Manama", "Riffa", "Muharraq", "Isa Town", "Hamad Town",
    "Sitra", "Budaiya", "Jidhafs", "A'ali", "Zallaq",
    "Diraz", "Sanabis", "Bani Jamra", "Saar", "Tubli"
  ],

  Iran: [
    "Tehran", "Isfahan", "Shiraz", "Tabriz", "Mashhad",
    "Qom", "Ahvaz", "Karaj", "Kerman", "Yazd",
    "Rasht", "Hamadan", "Urmia", "Arak", "Bandar Abbas"
  ],

  Iraq: [
    "Baghdad", "Basra", "Mosul", "Najaf", "Karbala",
    "Erbil", "Sulaymaniyah", "Kirkuk", "Nasiriyah", "Fallujah",
    "Ramadi", "Kut", "Diwaniyah", "Amarah", "Samarra"
  ],

  Turkey: [
    "Istanbul", "Ankara", "Izmir", "Bursa", "Antalya",
    "Konya", "Gaziantep", "Adana", "Trabzon", "Eskisehir",
    "Mersin", "Kayseri", "Diyarbakir", "Samsun", "Bodrum"
  ],

  /* ================= EUROPE ================= */

  "United Kingdom": [
    "London", "Manchester", "Liverpool", "Birmingham", "Leeds",
    "Glasgow", "Edinburgh", "Bristol", "Cardiff", "Sheffield",
    "Oxford", "Cambridge", "Leicester", "Brighton", "Newcastle"
  ],

  Germany: [
    "Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne",
    "Stuttgart", "Dresden", "Leipzig", "Dortmund", "Bremen",
    "Hanover", "Nuremberg", "Bonn", "Essen", "Dusseldorf"
  ],

  France: [
    "Paris", "Lyon", "Marseille", "Toulouse", "Nice",
    "Cannes", "Bordeaux", "Lille", "Nantes", "Strasbourg",
    "Montpellier", "Dijon", "Grenoble", "Rouen", "Avignon"
  ],

  Italy: [
    "Rome", "Milan", "Naples", "Venice", "Turin",
    "Florence", "Bologna", "Verona", "Pisa", "Genoa",
    "Palermo", "Catania", "Bari", "Siena", "Parma"
  ],

  Spain: [
    "Madrid", "Barcelona", "Valencia", "Seville", "Bilbao",
    "Malaga", "Granada", "Ibiza", "Cordoba", "Toledo",
    "Alicante", "Zaragoza", "Murcia", "Salamanca", "Pamplona"
  ],

  Netherlands: [
    "Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Eindhoven",
    "Groningen", "Leiden", "Tilburg", "Delft", "Haarlem",
    "Breda", "Arnhem", "Nijmegen", "Maastricht", "Almere"
  ],

  Sweden: [
    "Stockholm", "Gothenburg", "Malmo", "Uppsala", "Vasteras",
    "Linkoping", "Orebro", "Lund", "Helsingborg", "Jonkoping",
    "Kiruna", "Falun", "Kalmar", "Karlstad", "Sundsvall"
  ],

  Norway: [
    "Oslo", "Bergen", "Trondheim", "Stavanger", "Tromso",
    "Kristiansand", "Drammen", "Alesund", "Bodo", "Narvik",
    "Molde", "Hamar", "Skien", "Alta", "Lillehammer"
  ],

  Switzerland: [
    "Zurich", "Geneva", "Bern", "Lausanne", "Basel",
    "Lucerne", "Lugano", "Interlaken", "St. Gallen", "Winterthur",
    "Fribourg", "Montreux", "Sion", "Neuchatel", "Zermatt"
  ],

  /* ================= AFRICA ================= */

  Nigeria: [
    "Lagos", "Abuja", "Kano", "Ibadan", "Benin City",
    "Kaduna", "Port Harcourt", "Jos", "Maiduguri", "Enugu",
    "Abeokuta", "Warri", "Owerri", "Ilorin", "Onitsha"
  ],

  "South Africa": [
    "Cape Town", "Johannesburg", "Durban", "Pretoria", "Bloemfontein",
    "Port Elizabeth", "East London", "Polokwane", "Kimberley", "Nelspruit",
    "George", "Pietermaritzburg", "Soweto", "Rustenburg", "Welkom"
  ],

  Egypt: [
    "Cairo", "Alexandria", "Giza", "Luxor", "Aswan",
    "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Mansoura",
    "Tanta", "Faiyum", "Zagazig", "Ismailia", "Damietta"
  ],

  Kenya: [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret",
    "Naivasha", "Thika", "Malindi", "Kitale", "Garissa",
    "Nyeri", "Machakos", "Meru", "Kakamega", "Lamu"
  ],

  Morocco: [
    "Casablanca", "Rabat", "Marrakesh", "Fes", "Tangier",
    "Agadir", "Chefchaouen", "Meknes", "Oujda", "Tetouan",
    "Essaouira", "Safi", "Kenitra", "Nador", "El Jadida"
  ],

  Algeria: [
    "Algiers", "Oran", "Constantine", "Annaba", "Blida",
    "Batna", "Setif", "Tlemcen", "Bejaia", "Skikda",
    "Mostaganem", "Ghardaia", "Adrar", "Tizi Ouzou", "Biskra"
  ],

  Ethiopia: [
    "Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Bahir Dar",
    "Jimma", "Hawassa", "Adama", "Harar", "Axum",
    "Dessie", "Arba Minch", "Debre Birhan", "Jijiga", "Shashemene"
  ],

  Ghana: [
    "Accra", "Kumasi", "Tamale", "Takoradi", "Cape Coast",
    "Sunyani", "Ho", "Tema", "Bolgatanga", "Wa",
    "Koforidua", "Techiman", "Obuasi", "Yendi", "Winneba"
  ]
};



country.addEventListener("change", () => {

  city.innerHTML = '<option value="">Select City</option>';


  const selectedCountry = country.value;


  allCities[selectedCountry].forEach((item) => {

    city.innerHTML += `
         
        <option>${item}</option>
        
        `;

  });

});




// Form closer



const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", () => {
  const addressBar = document.getElementById("adressForm");

  addressBar.classList.add("removeAddress");


});


const formCLoser = document.getElementById("formCLoser");

formCLoser.addEventListener("click", () => {
  const addressBar = document.getElementById("adressForm");


  addressBar.classList.remove("removeAddress");

});



// Show menue

function showMenue() {
  const hideList = document.querySelector("#navBarSection nav");
  hideList.classList.toggle("hideList")
}





// ---------------Fade Section--------------------//
const sectionsfade = document.querySelectorAll(".fade-sectionplz");

const observerfade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showplz");
    }
  });
});

sectionsfade.forEach((section) => {
  observerfade.observe(section);
});

let formenquery = document.getElementById("myForm");

formenquery.addEventListener("submit", function (e) {
  e.preventDefault();
        
  let formData = new FormData(formenquery);

  let cartItems = [];

  // 🛒 CART ITEMS
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let titleEl = item.querySelector(".title");
    let countEl = item.querySelector(".count");
    let priceEl = item.querySelectorAll("p")[1];

    if (!titleEl || !countEl || !priceEl) return;

    let title = titleEl.innerText;
    let quantity = parseInt(countEl.innerText);
    let price = parseFloat(priceEl.innerText.replace("$", ""));

    cartItems.push({
      title,
      price,
      quantity
    });
  });

  // 💰 TOTAL
  let totalAmount = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // 📦 FINAL DATA
  let formdata = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    whatsno: formData.get("whatsno"),
    country: formData.get("country"),
    city: formData.get("city"),
    address: formData.get("address"),

    products: cartItems,
    totalAmount: totalAmount
  };

  // 📱 VALIDATION
  const pakno = /^03[0-9]{9}$/;

  const phone1 = formData.get("phone");
  const phone2 = formData.get("whatsno");

  if (
    !formdata.name ||
    !formdata.country ||
    !formdata.city ||
    !formdata.address
  ) {
    alert("Plz fill all fields!");
    return;
  }

  if (!pakno.test(phone1) || !pakno.test(phone2)) {
    alert("Plz enter correct phone number!");
    return;
  }

  // 📡 API CALL
  axios.post("http://localhost:8004/api/enquery/insert", formdata)
    .then((res) => {
      alert("Your order has been placed ✔️");

      console.log(res.data);

      formenquery.reset();

      document.getElementById("adressForm")
        .classList.remove("removeAddress");

      // 🧹 CLEAR CART UI
      document.querySelectorAll(".item").forEach(el => el.remove());
    })
    .catch((err) => {
      console.log(err);
      alert("Error saving data!");
    });

});