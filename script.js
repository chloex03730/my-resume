console.log("Script connected!");

// Skills Data ：

const skills = {
    adventure: [
        { name: "Weed Pulling", level: "weed" },
        { name: "Survival Skills", level: "survival" }
    ],

    friends: [
        { name: "Teamwork", level: "teamwork" },
        { name: "Problem Solving", level: "problem" }
    ],

    food: [
        { name: "Eating Delicious Food", level: "food" }
    ]
};

// Generate Skills：

function renderSkills() {

    Object.keys(skills).forEach(function (category) {

        const panel = document.getElementById(category);

        panel.innerHTML = "";

        skills[category].forEach(function (skill) {

            panel.innerHTML += `
                <div class="skill">
                    <span>${skill.name}</span>

                    <div class="bar">
                        <div class="fill ${skill.level}"></div>
                    </div>
                </div>
            `;

        });

    });

}

renderSkills();

// Theme Toggle ：

const themeBtn = document.querySelector("#theme-toggle");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// Accordion ：

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(function (header) {

    header.addEventListener("click", function () {

        header.parentElement.classList.toggle("open");

    });

});

//  Tabs 

const tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        document.querySelectorAll(".tab").forEach(function (button) {
            button.classList.remove("active");
        });

        document.querySelectorAll(".panel").forEach(function (panel) {
            panel.classList.remove("active");
        });

        tab.classList.add("active");

        document
            .querySelector("#" + tab.dataset.tab)
            .classList.add("active");

    });

});

// Print ：

const printBtn = document.querySelector("#print-btn");

printBtn.addEventListener("click", function () {
    window.print();
});

//Scroll Reveal：

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.8
});

reveals.forEach(function (section) {
    observer.observe(section);
});


// Contact Form 

const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const text = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || text === "") {

        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Message sent successfully!";
    message.style.color = "green";

    form.reset();

});