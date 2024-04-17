document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо посилання на кнопку
    var addGameButton = document.getElementById("addGameButton");

    // Додаємо обробник подій для кнопки
    addGameButton.addEventListener("click", function() {
        // Переходимо на сторінку з додаванням гри
        window.location.href = "add_game_page.html";
    });
});


// script.js

function goBack() {
    window.history.back();
}
