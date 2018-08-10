/* Обработчик движения мыши */
function handleMouseMove(initialPosition) {
    var prevPosition = initialPosition;
    
    return function(e) {
        var nextPosition = { x: e.clientX, y: e.clientY };

        if (document.documentElement.clientWidth < 992) {
            this.scrollTop += prevPosition.y - nextPosition.y;
        } else {
            this.scrollLeft += prevPosition.x - nextPosition.x;
        }
        
        prevPosition = nextPosition;
    }
}

/* Вешаем обработчик движения мыши на событие mousedown на регуляторе температуры */
document.querySelector('.temp-modal .handler').addEventListener('mousedown', function(e) {
    var initialPosition = { x: e.clientX, y: e.clientY };
    document.querySelector('.temp-modal .inner').onmousemove = handleMouseMove(initialPosition);
});

/* Убираем обработчик движения мыши на событие mouseup на регуляторе температуры */
document.addEventListener('mouseup', function () {
    document.querySelector('.temp-modal .inner').onmousemove = null;
});

/* Вешаем обработчик движения мыши на событие mousedown на регуляторе света */
document.querySelector('.light-modal .handler').addEventListener('mousedown', function(e) {
    var initialPosition = { x: e.clientX, y: e.clientY };
    document.querySelector('.light-modal .inner').onmousemove = handleMouseMove(initialPosition);
});

/* Убираем обработчик движения мыши на событие mouseup на регуляторе света */
document.addEventListener('mouseup', function () {
    document.querySelector('.light-modal .inner').onmousemove = null;
});

