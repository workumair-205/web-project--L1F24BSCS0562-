
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("fname").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let status = document.getElementById("status");

        if (name.trim() === "" || email.trim() === "") {
            status.innerHTML = "Please fill all required fields.";
            status.style.color = "red";
        } else {
            status.innerHTML = "Thank you! Your message has been submitted.";
            status.style.color = "green";

            contactForm.reset();
        }
    });
}


let searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("input", function() {
        let searchValue = searchInput.value.toLowerCase();

        let newsCards = document.querySelectorAll(".news-card");

        newsCards.forEach(function(card) {
            let title = card.querySelector(".news-title").innerText.toLowerCase();

            if (title.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

