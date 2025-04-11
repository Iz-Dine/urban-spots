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


