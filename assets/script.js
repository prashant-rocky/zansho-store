// navbar scolled
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // adjust scroll value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// / ---------------- Cookie Consent ----------------/
window.addEventListener('load', function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Ichiran Ramen",
            website_privacy_policy_url: "https://github.com/" // replace with real URL
        });
    }
});
// typewriter
// ---- CONFIG ----
const words = ["Booksellers.", "Magazine Curators.", "Readers.' Haven."]; // <-- change these
const typeSpeed = 120;    // ms per character when typing
const deleteSpeed = 70;   // ms per character when deleting
const holdTime = 1400;    // ms to wait after a full word is typed
const pauseBetween = 400; // small pause before typing next word
// ----------------

const el = document.getElementById("type");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTick() {
    const current = words[wordIndex % words.length];
    if (!isDeleting) {
        // typing
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
      
            isDeleting = true;
            setTimeout(typeTick, holdTime);
        } else {
            setTimeout(typeTick, typeSpeed);
        }
    } else {
        // deleting
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            // finished deleting, move to next word
            isDeleting = false;
            wordIndex++;
            setTimeout(typeTick, pauseBetween);
        } else {
            setTimeout(typeTick, deleteSpeed);
        }
    }
}

// start after a short delay
setTimeout(typeTick, 600);

// Optional: expose a small API to change words dynamically from other scripts
window.setTypewriterWords = function (newWords) {
    if (Array.isArray(newWords) && newWords.length) {
        words.length = 0;
        newWords.forEach(w => words.push(String(w)));
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        el.textContent = "";
    }
};
// our porducts
const products = [
    {
        id: 1,
        image: "assets/images/hikari.jpg",
        name: "Tomorrow, I'll Love You More",
        fullName: `Hikari Kuroki Photobook "Tomorrow, I'll Love You More" (Weekly Playboy Photo Book)`,
        shortDesceription: `This digital photo book is made up of unreleased cuts from the Weekly Playboy magazine gravure!`,
        desceription: `This digital photo book is made up of unreleased cuts from the Weekly Playboy magazine gravure! She
made waves after appearing in the 2020 broadcast of "Ultraman Z" (TV Tokyo), and is currently working as an assistant on the soccer program "Yabechi Stadium" (DAZN)! This is the first new photo shoot of the versatile Hikari Kuroki in about a year. While her previous gravure shoots have mostly featured bright and energetic models, this time she's changed things up with a hot spring location shoot. She wears glasses and lace for a more mature look. She shows off her natural cheerfulness at the beach. And in the hot springs, she shows off a new level of sexiness. Don't miss a single moment. Today, tomorrow, and the day after. You'll love Hikari Kuroki even more.`,
        price: "¥1,100"
    },
    {
        id: 2,
        image: "assets/images/shonen magazine.jpg",
        name: "Weekly Shonen Magazine 2025",
        fullName: `Weekly Shonen Magazine 2025 Issue 40 [Released September 3, 2025] [Magazine]`,
        shortDesceription: `A collaborative song with two extremely popular VTubers from Hololive has been realized!`,
        desceription: `Please note that some content may differ from the print version.
[Cover & Featured Gravure] [Enako] Gravure queen Enako brings you a refreshing and sexy summer!
[Featured Color] [Dream★Jumbo★Girl] Just look at this and you'll understand! Includes character introduction article!
[Color C] [Haenyin Priestess] Towa Towa x Botan Shishiro x Haenyin Priestess! A collaborative song with two extremely popular VTubers from Hololive has been realized!
[Color C] [Yume Neko Connect] You can still catch up! An article introducing the super cute heroines has been published!!`,
        price: "¥400"
    },
    {
        id: 3,
        image: "assets/images/hinano.jpg",
        name: "Hinano Himeno",
        fullName: `[Digital Exclusive] Hinano Himeno Digital Photobook Azure`,
        shortDesceription: `A smile like the blue sky that clears your heart.`,
        desceription: `A smile like the blue sky that clears your heart.
This digital-only photobook features Himeno Hinano, the blue member of Zeroichi Familia's fourth idol group, "#Mooove!", who appeared in Gravure Age Vol. 1!
From her charming smile to her mature, mature expression, it captures all of her charms!
We're bringing you a wealth of other cuts that you won't find anywhere else!`,
        price: "¥990"
    },
    {
        id: 4,
        image: "assets/images/issue35.jpg",
        name: "Big Comic Spirits 2025",
        fullName: `Weekly Big Comic Spirits 2025 Issue 35 [Digital Edition Exclusive: Increased Gravure "Hinano Himeno"] (Released July 28, 2025) [Magazine]`,
        shortDesceription: `Front gravure! The leader of the idol group "#Mooove!" makes her first appearance in Spirits!`,
        desceription: `<br>●Front gravure! The leader of the idol group "#Mooove!" makes her first appearance in Spirits! Digital edition includes more content! "Himeno Hinano"
<br>●Front color! TV anime and live-action drama adaptations confirmed! "Day Break" by Shinzo Keigo
<br>● "The Mole Song" by Takahashi Noboru
<br>● "Asadora!"
by Urasawa Naoki <br>● "Alice, Even in Space" by
Ueno Kiiko <br>● "Yoshida Lemon Drops" by Wakaki
Tamiki <br>● "Embryologist Mizuiro" by Okazaki Mari
<br>● "This World is Worth Fighting For" by Kodama Hatsumi
<br>●Mid-page color! TV anime adaptation confirmed! Special special feature! "Snowball Earth" by Tsujitsugu Yuhirou
<br>● "Karasu Nakimura" by Teruya Taro
<br>● "My Demonic Daughter" by Sankaku Head
<br>● "Gokkuri" by Maehara Takeru
<br>●Mid-page color! A new series where a "good voice" will change your daily life! "The Room Where Voices Fall" by HERO + Takahashi Tsutsuji
; "Afternoon Delicious Medicinal Diary" by Afternoon
; "The Story of a Child from That Kind of Family" by Shimura Takako
; In-page color! The latest 6th volume of the book will be released around July 30th! "Plant Pathology Wishes for Tomorrow's You" by Takeyoshi Minoru
; "Mysterious Stories Told by Mountain People: Mountain Monster Vermilion" by Tanaka Yasuhiro + Mizutani Midori
; "Nihao! The Cat-Cat Foreign Student" by Hata Aiwu
; Special One-Shot "Paradise on the Balcony" by Tonight Azumi
; "Les Servants" by Hamada Kosuke;
"Oblivion Sachiko" by Abe Jun
; "The Wind-City Detective" by Ishinomori Shotaro + Sanjo Riku + Sato Masaki
; "Whimsical Concept" by Hoi Choi Pro.`,
        price: "¥510"
    },
    {
        id: 5,
        image: "assets/images/akamaShiki.jpg",
        name: "Akama Shiki",
        fullName: `[Digital Exclusive] Akama Shiki Digital Photobook Vermilion`,
        shortDesceription: `his red will brighten your mood too.
`,
        desceription: `This red will brighten your mood too.
This digital-only photo collection features Akama Shiki, the red member of #Mooove!, Zeroichi Familia's fourth idol group, who appeared in Gravure Age Vol. 1!
Experience thrilling moments, including the innocent smile she occasionally flashes amidst her mature aura!
We're bringing you plenty of other cuts you won't find anywhere else!`,
        price: "¥990"
    },
    {
        id: 6,
        name: "Himeno Hinano Summer Vacation",
        image: "assets/images/hinanoSummer.jpg",
        fullName: `Himeno Hinano Summer Vacation Express SPI/Sun Gravure Photobook`,
        shortDesceription: `The leader of the idol group "#Mooove!" shows off his charms in this summer gravure!`,
        desceription: `The leader of the idol group "#Mooove!" shows off his charms in this summer gravure!
Be surprised by the serious look in this mischievous girl's eyes!
Summer vacation with Hinano has begun!`,
        price: "¥1,100"
    },
    {
        id: 7,
        image: "assets/images/comicSprit.jpg",
        name: "Weekly Big Comic Spirits 2025",
        fullName: `Weekly Big Comic Spirits 2025 Issue 35 [Digital Edition Exclusive: Increased Gravure "Hinano Himeno"] (Released July 28, 2025) [Magazine]`,
        shortDesceription: `makes her first appearance in Spirits! Digital edition includes more content!`,
        desceription: `<br>●Front gravure! The leader of the idol group "#Mooove!" makes her first appearance in Spirits! Digital edition includes more content! "Himeno Hinano"
<br>●Front color! TV anime and live-action drama adaptations confirmed! "Day Break" by Shinzo Keigo
<br>● "The Mole Song" by Takahashi Noboru
<br>● "Asadora!"
by Urasawa Naoki <br>● "Alice, Even in Space" by
Ueno Kiiko <br>● "Yoshida Lemon Drops" by Wakaki
Tamiki <br>● "Embryologist Mizuiro" by Okazaki Mari
<br>● "This World is Worth Fighting For" by Kodama Hatsumi
<br>●Mid-page color! TV anime adaptation confirmed! Special special feature! "Snowball Earth" by Tsujitsugu Yuhirou
<br>● "Karasu Nakimura" by Teruya Taro
<br>● "My Demonic Daughter" by Sankaku Head
<br>● "Gokkuri" by Maehara Takeru
<br>●Mid-page color! A new series where a "good voice" will change your daily life! "The Room Where Voices Fall" by HERO + Takahashi Tsutsuji
; "Afternoon Delicious Medicinal Diary" by Afternoon
; "The Story of a Child from That Kind of Family" by Shimura Takako
; In-page color! The latest 6th volume of the book will be released around July 30th! "Plant Pathology Wishes for Tomorrow's You" by Takeyoshi Minoru
; "Mysterious Stories Told by Mountain People: Mountain Monster Vermilion" by Tanaka Yasuhiro + Mizutani Midori
; "Nihao! The Cat-Cat Foreign Student" by Hata Aiwu
; Special One-Shot "Paradise on the Balcony" by Tonight Azumi
; "Les Servants" by Hamada Kosuke;
"Oblivion Sachiko" by Abe Jun
; "The Wind-City Detective" by Ishinomori Shotaro + Sanjo Riku + Sato Masaki
; "Whimsical Concept" by Hoi Choi Pro.

*The digital version of "Weekly Spirits" does not include the print version's supplements and bonus features. Also, some content may differ from the print version. Thank you for your understanding.`,
        price: "¥510"
    },
    {
        id: 8,
        image: "assets/images/issue42.jpg",
        name: "Big Comic Spirits Tanaka Miku",
        fullName: `Weekly Big Comic Spirits 2025 Issue 41/42 [Digital Edition Exclusive: Increased Gravure "Tanaka Miku"] (Published September 8, 2025) [Magazine]`,
        shortDesceription: `Front page gravure! Following the great reception of the previous issue, she appears for the second time this year!`,
        desceription: `<br>●Front page gravure! Following the great reception of the previous issue, she appears for the second time this year! The digital edition includes more content! "Tanaka Miku"
<br>●Front page color! Over 1 million copies sold in total! "Wisteria by the Roadside" by Nabekura Futoshi
<br>● "The Mole Song" by Takahashi
Noboru <br>● "Article 9's Deadly Sin
" by Manabe Shohei <br>● "Sister Regista" by Okada Mari + Ojiro Makoto
<br>● "The Room Where Voices Fall" by HERO + Takahashi Tsutsuji
<br>●In-page color! Volume 1 of the book will be released around September 30th! "Dignity - A Travel Doctor's Prescription" by Yada Eriko
<br>● "Kunerumaruta Noubo" by Takao Jingu
<br>● "Bunny Night Treatment" by Shinonome
<br>●In-page gravure! The gravure idol who took variety shows by storm makes her first appearance in Spirits! "Shimizu Airi"
<br>●In-page color! The latest volume 9 of the book is now on sale! "ROPPEN - Six Chapters -" by Miyashita Akira
; "Our Home Kingdom" by Mori Meguru + Sugarono Shion
; "Karasu Nakimura" by Teruya Taro
; "My Demon Daughter" by Sankaku Head
; "Shinkuro, Run!" by Yuki Masami
; "Oblivion Sachiko" by Abe Jun
; "Mysterious Stories Told by Mountain People: Mountain Monster Aka" by Tanaka Yasuhiro + Mizutani Midori
; "MUSE" by Oniyama Mizuki
; "Farewell Hospital" by Okita x Hana
; "Whimsical Concept" by Hoi Choi Pro`,
        price: "¥550"
    },
    {
        id: 9,
        name: "Shonen Magazine 2025",
        image: "assets/images/issue39.jpg",
        fullName: `Weekly Shonen Magazine 2025 Issue 39 [Released August 27, 2025] [Magazine]`,
        shortDesceription: `The digital version of "Weekly Shonen Magazine" may differ in some content from the print version.`,
        desceription: `The digital version of "Weekly Shonen Magazine" may differ in some content from the print version. Thank you for your understanding.
[Front page color] The final episode of the miraculous love comedy with the three shrine maiden sisters! [The Matchmaking of the Amagami Family]
[C color] A powerful warrior has arrived, a match for a thousand! What will be the outcome of this fierce battle?! [The Four Horsemen of the Apocalypse]
Volume 3 of 11
Weekly Shonen Magazine
Language
Japanese
`,
        price: "¥400"
    },
]

const productContainer = document.getElementById("products");
if (productContainer) {

    products.forEach(product => {
        productContainer.innerHTML += `
        <div class="card" key="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.shortDesceription}</p>
                <button class="myBtn me-2" onclick="viewDetails(${product.id})">Details</button>
                <button class="myBtn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
        `;
    });

    function viewDetails(id) {
        window.location.href = `productDetail.html?id=${id}`;
    }
}
const cartBox = document.getElementById("cartBox");
const closeCart = document.getElementById("closeCart");
const cart = document.getElementById("cart");
if (cart) {

    cart.addEventListener("click", () => {
        cartBox.style.display = "block";
    });
}
if (closeCart) {
    closeCart.addEventListener("click", () => {
        cartBox.style.display = "none";
    });
}
// single Product
let cartitems = [];
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById("singleProduct").innerHTML = `
        <div class="detail-card">
            <div class="row">
                <div class="col-md-5 text-center">
                    <img src="${product.image}" alt="${product.name}" class="w-75 h-auto">
                </div>
                <div class="col-md-7 py-3">
                    <h2>${product.fullName}</h2>
                    <p>${product.desceription}</p>
                    <h3 class="d-inline">Price: ${product.price}</h3><span class="mainColor ps-3">includes all taxes.</span>
                    <button class="myBtn d-block my-3" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cartitems.push(product);

    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cartitems.forEach((item, index) => {
        total += parseFloat(item.price.replace("¥", "").replace(",", ""));
        if(cartItemsContainer){
            cartItemsContainer.innerHTML += `
                <div class="cart-item d-flex justify-content-between align-items-center border-bottom py-2">
                    <div>
                        <h6>${item.name}</h6>
                        <small>${item.price}</small>
                    </div>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        }
    });

    totalAmount.innerText = `¥${total.toFixed(2)}`;
}
function removeFromCart(index) {
    cartitems.splice(index, 1);
    renderCart();
}

// Open checkout form
const checkout = document.getElementById("Checkout");
if (checkout){
    checkout.addEventListener("click", () => {
        if (cartitems.length == 0) {
            alert("please add product in cart")
        }
        else{
            const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
            checkoutModal.show();
        }
    });
}

// Handle form submission
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const payment = document.getElementById("payment").value;

    if (!name || !email || !address || !phone) {
        alert("⚠️ Please fill out all fields before placing your order.");
        return;
    }

    if (payment === "cod") {
        alert(`✅ Thank you, ${name}!
Your order will be delivered to: ${address}
📧 Email: ${email}
📞 Phone: ${phone}
💰 Payment: Cash on Delivery.`);
    }

    // Clear cart after order
    cartitems = [];
    localStorage.setItem("cart", JSON.stringify(cartitems));
    renderCart();

    // Reset form
    e.target.reset();

    // Hide the modal
    const modalEl = document.getElementById("checkoutModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
});
 const contactForm = document.getElementById('contactForm');
  const thankYouCard = document.getElementById('thankYouCard');

  contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // prevent actual form submission
    thankYouCard.classList.remove('d-none'); // show thank you card

    // Hide after 4 seconds
    setTimeout(() => {
      thankYouCard.classList.add('d-none');
      contactForm.reset(); // reset form fields
    }, 4000);
  });