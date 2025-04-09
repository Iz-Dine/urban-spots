    
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 15000); 
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

    
    // Popup functionaliteit
    function openPopup(imageSrc, text) {
        let popup = document.getElementById('popup');
        document.getElementById('popup-image').src = imageSrc;
        document.getElementById('popup-text').textContent = text;
        popup.style.display = "flex";
    }

    // Zorg dat de functie globaal bereikbaar is
    window.openPopup = openPopup;

    // Close knop event listener
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.getElementById('popup').style.display = "none";
    });

    // Sluit pop-up als je buiten klikt
    window.addEventListener("click", function (event) {
        let popup = document.getElementById('popup');
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });


function openPopup(imageSrc, text) {
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup-text').textContent = text;
    document.getElementById('popup').style.display = "flex";
}

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById('popup').style.display = "none";
});

window.onclick = function(event) {
    let popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = "none";
    }
}


