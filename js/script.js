document.addEventListener("DOMContentLoaded", function() {
    const gabungButton = document.querySelector(".gabung-button");

    gabungButton.addEventListener("click", function() {
        const formInputSection = document.querySelector(".form-input");
        formInputSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://i0.wp.com/ritaelfianis.id/wp-content/uploads/2023/09/Apa-Itu-Coding-Konsep-Dasar-Sejarah-dan-Jenis.jpg?fit=2560%2C1707&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZAMwUbjx0UwIi0XpZJTgcClST3ge7iGgiw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MLI0nKv3t5GfKE1Rt1KW6vpx8gmKHtPxtg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmEvW3eRi_Hxy3GoMu_FsRnxKbNIbtflRgg&usqp=CAU"
    ];

    const slideshowImage = document.getElementById("slideshow-image");
    let currentImageIndex = 0;

    function changeImage() {
        slideshowImage.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    changeImage();

    setInterval(changeImage, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const gabungButton = document.querySelector(".gabung-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nameInput = form.querySelector(".name-input");
        const emailInput = form.querySelector(".email-input");
        const selectInput = form.querySelector(".select-input");

        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || selectInput.value === "-") {
            alert("Please fill in all required fields.");
        } else {
            const name = nameInput.value.trim();
            window.location.href = "welcome.html?name=" + encodeURIComponent(name);
        }
    });

    gabungButton.addEventListener("click", function() {
        const formSection = document.querySelector(".form-input");
        formSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var callUsButton = document.querySelector(".contact-button");

    callUsButton.addEventListener("click", function() {
        alert("Reach us by sending messages to testassigments@gmail.com");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var pageButton = document.querySelector(".page-button");

    pageButton.addEventListener("click", function() {
        var informationElement = document.querySelector(".information");
        var informationElementPosition = informationElement.offsetTop;

        window.scrollTo({
            top: informationElementPosition,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var homeButton = document.querySelector(".home-button");

    homeButton.addEventListener("click", function() {
        var sectionContainer = document.querySelector(".section-container");
        var sectionContainerPosition = sectionContainer.offsetTop;

        window.scrollTo({
            top: sectionContainerPosition,
            behavior: "smooth"
        });
    });
});


