
let gymName = "GymPress";
let openingTime = "8:00 AM";
let isOpen = true;
let membershipDiscount = 10;

let header = document.getElementById("main-header");

if (header) {
    header.style.transition = "0.3s";
}

const showMessage = (message) => {
    alert(message);
};

let trainers = [
    { name: "John Marrion", role: "Personal Trainer" },
    { name: "Stella Marquez", role: "Tennis Coach" },
    { name: "Mark Perez", role: "Football Coach" },
    { name: "Alan Wright", role: "Personal Trainer" },
    { name: "Paul McCoy", role: "Tennis Coach" },
    { name: "Valentina Murray", role: "Football Coach" }
];

let { name, role } = trainers[0];

let allTrainers = [...trainers];

let trainerNames = allTrainers.map(trainer => trainer.name);

// Filter Method
let personalTrainers = allTrainers.filter(
    trainer => trainer.role === "Personal Trainer"
);

let totalTrainers = allTrainers.reduce(
    (total, trainer) => total + 1, 0
);

console.log("Gym:", gymName);
console.log("Opening Time:", openingTime);
console.log("First Trainer:", name, role);
console.log("Trainer Names:", trainerNames);
console.log("Personal Trainers:", personalTrainers);
console.log("Total Trainers:", totalTrainers);

// Rest Operator
const displayTrainers = (...names) => {
    console.log("Available Trainers:", names);
};

displayTrainers(...trainerNames);

let trainerContainer = document.querySelector(".trainers-container");

if (trainerContainer) {

    let search = document.createElement("input");

    search.type = "text";
    search.placeholder = "Search Trainers...";
    search.style.cssText =
        "display:block;width:80%;max-width:400px;margin:30px auto;padding:12px;border:1px solid #ccc;";

    trainerContainer.before(search);

    let trainerCards = [...document.querySelectorAll(".trainer-box")];

    search.addEventListener("input", () => {

        let searchValue = search.value.toLowerCase();

        trainerCards.forEach(card => {

            let trainerName = card.querySelector("h3").textContent.toLowerCase();
            let trainerRole = card.querySelector(".trainer-badge").textContent.toLowerCase();

            if (trainerName.includes(searchValue) ||
                trainerRole.includes(searchValue)) {

                card.style.display = "";

            } else {

                card.style.display = "none";
            }
        });
    });
}

let newsSearch = document.querySelector(".search-box input");
let newsButton = document.querySelector(".search-box button");

if (newsSearch && newsButton) {

    let newsCards = [...document.querySelectorAll(".news-card")];

    const searchNews = () => {

        let value = newsSearch.value.toLowerCase();

        let results = newsCards.filter(card =>
            card.textContent.toLowerCase().includes(value)
        );

        newsCards.forEach(card => {
            card.style.display = results.includes(card) ? "" : "none";
        });

        if (results.length === 0) {
            alert("No news articles found!");
        }
    };

    newsButton.addEventListener("click", searchNews);

    newsSearch.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            searchNews();
        }
    });
}


let discountSection = document.querySelector(".discount");

if (discountSection) {

    let discountButton = document.createElement("button");

    discountButton.textContent = "Apply Student Discount";

    discountButton.style.cssText =
        "margin-left:15px;padding:10px;background:#111;color:white;border:0;cursor:pointer;";

    discountSection.appendChild(discountButton);

    let originalPrices = [...document.querySelectorAll(".memberships .row span:last-child")];

    discountButton.addEventListener("click", () => {

        originalPrices.forEach(price => {

            let amount = Number(price.textContent.replace("$", ""));

            let discountedPrice = amount - (amount * membershipDiscount / 100);

            price.textContent = "$" + discountedPrice.toFixed(2);
        });

        discountButton.disabled = true;
        discountButton.textContent = "Discount Applied";
    });
}


let contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        let firstName = document.getElementById("fname").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let status = document.getElementById("status");

        if (firstName === "" || email === "" || message === "") {

            status.textContent = "Please fill all required fields.";
            status.style.color = "red";

            return;
        }

        if (!email.includes("@") || !email.includes(".")) {

            status.textContent = "Please enter a valid email.";
            status.style.color = "red";

            return;
        }
        let formStatus = "success";

        switch (formStatus) {

            case "success":
                status.textContent = "Processing your message...";
                status.style.color = "#FFC107";
                break;

            default:
                status.textContent = "Something went wrong.";
                status.style.color = "red";
        }

        const processForm = () => {

            return new Promise((resolve) => {

                resolve("Your message has been checked successfully!");

            });
        };

        try {

            let result = await processForm();

            status.textContent = result;
            status.style.color = "green";

            contactForm.reset();

        } catch (error) {

            status.textContent = "Error processing your message.";
            status.style.color = "red";
        }
    });
}


let pageLinks = document.querySelectorAll('a[href^="#"]');

pageLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        let target = document.querySelector(link.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


console.log("Welcome to GymPress Website!");
