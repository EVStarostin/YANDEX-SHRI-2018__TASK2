/* Обработка вращения слайдера */
window.addEventListener('load', handleRotateFloorSlider);
function handleRotateFloorSlider() {
    // Константы
    var MIN_ANGLE = 30,
    MAX_ANGLE = 330,
    MIN_TEMPERATURE = 10,
    MAX_TEMPERATURE = 25;

    // Функция для отображения температуры на регуляторе
    // Первым аргументом принимает элемент, а вторым угол
    function displayTemperature(element, angle) {
        var temp = MIN_TEMPERATURE + (MAX_TEMPERATURE - MIN_TEMPERATURE) * (angle - MIN_ANGLE) / (MAX_ANGLE - MIN_ANGLE);
        element.dataset.after = '+' + Math.round(temp);
    }

    // Функция для получения угла поворота элемента
    // Первым аргументом принимает элемент
    function getAngle(element) {
        var valueStyle = window.getComputedStyle(element).getPropertyValue("transform");
        if (valueStyle === 'none') {
            return 0;
        }

        var values = valueStyle.split('(')[1].split(')')[0].split(',');
        var cos = values[0],
            sin = values[1];
        var degree = Math.round(Math.asin(sin) * (180 / Math.PI));

        if (cos < 0) {
            var addDegree = 90 - Math.round(Math.asin(sin) * (180 / Math.PI));
            degree = 90 + addDegree;
        }
        if (degree < 0) {
            degree = 360 + degree;
        }

        return degree;
    }

    // Функция для задания свойства transform: rotate всем нужным блокам
    // Первым аргументом принимает элемент, вторым - угол поворот
    function rotate(element, deg) {
        element.style.transform = 'rotate(' + deg + 'deg)';
    }

    // Функция для получения угла относительно центра по координатам курсора
    // Первым аргументом принимает событие
    function getCursorAngle(position) {
        var roundSlider = document.querySelector('.round-slider');
        var center = {
            x: roundSlider.clientWidth / 2,
            y: roundSlider.clientHeight / 2
        };
        var x = position.x - center.x,
            y = position.y - center.y;

        if (x === 0) {
            return (y > 0) ? 180 : 0;
        }
        var a = Math.atan(y / x) * 180 / Math.PI;
        a = (x > 0) ? a + 90 : a + 270;
        a = a + 180;
        return a;
    }

    // Функция-обработчик перемещения мыши на крутилке
    // Первым аргументом принимает положение курсора при событии mousedown
    function returnHandleMouseMove(cursorPosition) {
        var prevPosition = cursorPosition;
        return function handleMouseMove(e) {
            e.preventDefault();
            var roundSlider = document.querySelector('.round-slider'),
            block2 = document.querySelector('.block-2'),
            block3 = document.querySelector('.block-3'),
            pointer = document.querySelector('.pointer');

            var prevPositionAngle = getCursorAngle(prevPosition);
            var positionAngle = getCursorAngle( {
                x: e.targetTouches ? e.targetTouches[0].pageX - e.target.getBoundingClientRect().left : e.offsetX, 
                y: e.targetTouches ? e.targetTouches[0].pageY - e.target.getBoundingClientRect().top : e.offsetY
            } );

            var angle = (positionAngle - prevPositionAngle);
            prevPosition = {
                x: e.targetTouches ? e.targetTouches[0].pageX - e.target.getBoundingClientRect().left : e.offsetX, 
                y: e.targetTouches ? e.targetTouches[0].pageY - e.target.getBoundingClientRect().top : e.offsetY
            };
            
            if (Math.abs(angle) > 100) {
                return;
            } else if (getAngle(block3) + angle <= 330 && getAngle(block3) + angle >= 30) {
                rotate(block2, (getAngle(block2) + angle));
                rotate(block3, (getAngle(block3) + angle));
                rotate(pointer, (getAngle(pointer) + angle));
                displayTemperature(roundSlider, getAngle(block3));
            } else if (getAngle(block3) + angle > 330) {
                rotate(block2, MAX_ANGLE - 180);
                rotate(block3, MAX_ANGLE);
                rotate(pointer, MAX_ANGLE);
                displayTemperature(roundSlider, getAngle(block3));
                return;
            } else if (getAngle(block3) + angle < 30) {
                rotate(block2, MIN_ANGLE + 180);
                rotate(block3, MIN_ANGLE);
                rotate(pointer, MIN_ANGLE);
                displayTemperature(roundSlider, getAngle(block3));
                return;
            } else {
                return;
            }

            if (getAngle(block3) < 180) {
                block2.style.opacity = '0';
                block3.style.opacity = '1';
            } else {
                block2.style.opacity = '1';
                block3.style.opacity = '0';
            }
        }
    }

    var roundSlider = document.querySelector('.round-slider');

    roundSlider.addEventListener('touchstart', function (e) {
        var cursorPosition = {
            x: e.target.getBoundingClientRect().left - e.targetTouches[0].pageX,
            y: e.target.getBoundingClientRect().top - e.targetTouches[0].pageY
        }
        roundSlider.ontouchmove = returnHandleMouseMove(cursorPosition);
    });

    roundSlider.addEventListener('mousedown', function (e) {
        var cursorPosition = {
            x: e.offsetX,
            y: e.offsetY
        }
        roundSlider.onmousemove = returnHandleMouseMove(cursorPosition);
    });
    
    document.addEventListener('mouseup', function () {
        roundSlider.onmousemove = null;
    });
};