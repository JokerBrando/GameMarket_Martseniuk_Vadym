// Отримання посилань на кнопки
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

// Додавання обробника подій на кожну кнопку
button1.addEventListener('click', function() {
    // Перенаправлення на першу сторінку
    window.location.href = 'page1.html';
});

button2.addEventListener('click', function() {
    // Перенаправлення на другу сторінку
    window.location.href = 'page2.html';
});
