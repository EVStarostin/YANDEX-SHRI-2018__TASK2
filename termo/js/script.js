/* --- Карусель в разделе "Главное" --- */
(function () {
    "use strict";
    /* конфигурация */
    var height = 135, // высота блока
        count = 2, // количество блоков

        carousel = document.getElementById('carousel'),
        list = carousel.querySelector('ul'),
        listElems = carousel.querySelectorAll('li'),

        position = 0; // текущий сдвиг вверх

    carousel.querySelector('.prev').onclick = function () {
        // сдвиг вниз
        // последнее передвижение вниз может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position + height * count, 0);
        list.style.marginTop = position + 'px';
    };

    carousel.querySelector('.next').onclick = function () {
        // сдвиг вверх
        // последнее передвижение вверх может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position - height * count, -height * (listElems.length - count));
        list.style.marginTop = position + 'px';
    };
}());
/* --- Карусель в разделе "Главное" --- */



/* --- Карусель в разделе "Избранные сценарии" --- */
(function () {
    "use strict";
    /* конфигурация */
    var height = 115, // высота блока
        count = 3, // количество блоков

        carousel = document.getElementById('slider-fav'),
        list = carousel.querySelector('ul'),
        listElems = carousel.querySelectorAll('li'),

        position = 0; // текущий сдвиг вверх

    document.querySelector('.fav-section .prev').onclick = function () {
        // сдвиг вниз
        // последнее передвижение вниз может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position + height * count, 0);
        list.style.marginTop = position + 'px';
    };

    document.querySelector('.fav-section .next').onclick = function () {
        // сдвиг вверх
        // последнее передвижение вверх может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position - height * count, -height * (listElems.length - count));
        list.style.marginTop = position + 'px';
    };
}());
/* --- Карусель в разделе "Избранные сценарии" --- */
