// Отримання посилань на кнопки
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var body = document.body;
var content = document.querySelector('.content');

// Змінні для зберігання кольорів
var colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
var currentColorIndex = 0;

// Додавання обробника подій на кожну кнопку
button1.addEventListener('click', function() {
    // Перенаправлення на першу сторінку
    window.location.href = 'page1.html';
});

button2.addEventListener('click', function() {
    // Перенаправлення на другу сторінку
    window.location.href = 'page2.html';
});

// Відслідковування події прокрутки миші
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Прокрутка вниз
        window.scrollBy(0, 50); // Змініть значення на те, яке вам підходить
    } else {
        // Прокрутка вгору
        window.scrollBy(0, -50); // Змініть значення на те, яке вам підходить
    }
});

// Зміна кольору фону та тексту
setInterval(function() {
    var nextColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[nextColorIndex];
    content.style.color = colors[colors.length - nextColorIndex - 1];
    currentColorIndex = nextColorIndex;
}, 1000); // Інтервал зміни кольорів, у даному випадку кожні 1000 мілісекунд (1 секунда)
