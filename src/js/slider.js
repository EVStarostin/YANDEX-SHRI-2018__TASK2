/* Обработчик движения мыши */
function handleMouseMove(initialPositionX) {
    var prevPositionX = initialPositionX;
    
    return function(e) {
        var nextPositionX = e.clientX;
        this.scrollLeft += prevPositionX - nextPositionX;
        prevPositionX = nextPositionX;
    }
}

/* Вешаем обработчик движения мыши на событие mousedown на регуляторе температуры */
document.querySelector('.temp-modal .handler').addEventListener('mousedown', function(e) {
    var initialPositionX = e.clientX;
    document.querySelector('.temp-modal .inner').onmousemove = handleMouseMove(initialPositionX);
});

/* Убираем обработчик движения мыши на событие mouseup на регуляторе температуры */
document.addEventListener('mouseup', function () {
    document.querySelector('.temp-modal .inner').onmousemove = null;
});

/* Вешаем обработчик движения мыши на событие mousedown на регуляторе света */
document.querySelector('.light-modal .handler').addEventListener('mousedown', function(e) {
    var initialPositionX = e.clientX;
    document.querySelector('.light-modal .inner').onmousemove = handleMouseMove(initialPositionX);
});

/* Убираем обработчик движения мыши на событие mouseup на регуляторе света */
document.addEventListener('mouseup', function () {
    document.querySelector('.light-modal .inner').onmousemove = null;
});

