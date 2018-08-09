/* Показывать/прятать двойную стрелку вверх при скролле плашек с устройствами в разделе главное */
document.querySelector('.devices').addEventListener('scroll', function () {
    if (this.scrollTop !== 0) {
        this.classList.add('scrolled');
    } else {
        this.classList.remove('scrolled');   
    }
});

/* Показывать/прятать меню при клике по кнопке */
document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('visible');
    document.querySelector('.header-and-main').classList.toggle('menu-visible');
});

/* Фильтр в разделе избранные устройства */
var filterButtons = document.querySelectorAll('.section-fav-devices .filter button');
for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
        /* Добавляем нажатой кнопке класс active, у остальных кнопок удаляем */
        this.classList.add('active');
        for (var j = 0; j < filterButtons.length; j++) {
            if (filterButtons[j] !== this) {
                filterButtons[j].classList.remove('active');
            }
        }
        /* Прячем все устройства, у которых атрубит data-filter не равен атрибуту кликнутой кнопки */
        var devices = document.querySelectorAll('.section-fav-devices .fav-devices li');
        for (var k = 0; k < devices.length; k++) {
            if (this.dataset.filter === 'Все') {
                devices[k].style.display = "block";
            } else if (devices[k].dataset.filter !== this.dataset.filter) {
                devices[k].style.display = "none";
            } else {
                devices[k].style.display = "block";
            }
        }
        /* Меняем прозрачность стрелки вправо, если все устройства помещаются на экране */
        if (document.querySelector('.fav-devices').clientWidth < document.querySelector('.fav-devices').scrollWidth) {
            document.querySelector('.section-fav-devices .right').style.opacity = '1';
        } else {
            document.querySelector('.section-fav-devices .right').style.opacity = '.3';
        }
    });
}

/* Меняем прозрачность стрелки вправо, если устройства не помещаются на экране */
window.addEventListener('load', function() {
    if (document.querySelector('.fav-devices').clientWidth < document.querySelector('.fav-devices').scrollWidth) {
        document.querySelector('.section-fav-devices .right').style.opacity = '1';
    }
})

/* Обработка нажатия на кнопку влево в разделе избранные устройства */
document.querySelector('.section-fav-devices .left').addEventListener('click', function() {
    document.querySelector('.fav-devices').scrollLeft -= 215;
});

/* Обработка нажатия на кнопку вправо в разделе избранные устройства */
document.querySelector('.section-fav-devices .right').addEventListener('click', function() {
    document.querySelector('.fav-devices').scrollLeft += 215;
});

/* При скролле меняем прозрачность кнопок если дальше скролить нельзя */
document.querySelector('.fav-devices').addEventListener('scroll', function() {
    if (this.scrollLeft <= 0) {
        document.querySelector('.section-fav-devices .left').style.opacity = '.3';
    } else {
        document.querySelector('.section-fav-devices .left').style.opacity = '1';
    }
    if (this.clientWidth + this.scrollLeft >= this.scrollWidth) {
        document.querySelector('.section-fav-devices .right').style.opacity = '.3';
    } else {
        document.querySelector('.section-fav-devices .right').style.opacity = '1';
    }
});

/* Обработка выбора режима в модальном окне */
var modes = document.querySelectorAll('.modal .mode button');
for (var i = 0; i < modes.length; i++) {
    modes[i].addEventListener('click', function() {
        /* Добавляем нажатой кнопке класс active, у остальных кнопок удаляем */
        this.classList.add('active');
        for (var j = 0; j < modes.length; j++) {
            if (modes[j] !== this) {
                modes[j].classList.remove('active');
            }
        }
    });
}

/* При нажатии на плашку с устройством в разделе Избранные устройства открывается 
модальное окно, куда подставляется название устройства, статус работы и иконка */
var favDevices = document.querySelectorAll('.fav-devices button');
for (var i = 0; i < favDevices.length; i++) {
    favDevices[i].addEventListener('click', function() {
        if (this.parentElement.dataset.type === 'temp') {
            var modal = document.querySelector('.temp-modal');
            modal.querySelector('.name').innerText = this.querySelector('.name').innerText;
            modal.querySelector('.status').innerText = this.querySelector('.action').innerText;
            if (this.parentElement.dataset.power === 'on') {
                modal.querySelector('.icon-temp').classList.remove('powerOff');
                modal.querySelector('.icon-temp').classList.add('powerOn');
            } else {
                modal.querySelector('.icon-temp').classList.remove('powerOn');
                modal.querySelector('.icon-temp').classList.add('powerOff');
            }
            modal.classList.add('visible');
            document.querySelector('.page-wrapper').classList.add('blur');
        } else if (this.parentElement.dataset.type === 'light') {
            var modal = document.querySelector('.light-modal');
            modal.querySelector('.name').innerText = this.querySelector('.name').innerText;
            modal.querySelector('.status').innerText = this.querySelector('.action').innerText;
            if (this.parentElement.dataset.power === 'on') {
                modal.querySelector('.icon-light').classList.remove('powerOff');
                modal.querySelector('.icon-light').classList.add('powerOn');
            } else {
                modal.querySelector('.icon-light').classList.remove('powerOn');
                modal.querySelector('.icon-light').classList.add('powerOff');
            }
            modal.classList.add('visible');
            document.querySelector('.page-wrapper').classList.add('blur');
        } else if (this.parentElement.dataset.type === 'floor') {
            var modal = document.querySelector('.floor-modal');
            modal.querySelector('.name').innerText = this.querySelector('.name').innerText;
            modal.querySelector('.status').innerText = this.querySelector('.action').innerText;
            if (this.parentElement.dataset.power === 'on') {
                modal.querySelector('.icon-temp').classList.remove('powerOff');
                modal.querySelector('.icon-temp').classList.add('powerOn');
            } else {
                modal.querySelector('.icon-temp').classList.remove('powerOn');
                modal.querySelector('.icon-temp').classList.add('powerOff');
            }
            modal.classList.add('visible');
            document.querySelector('.page-wrapper').classList.add('blur');
        }
    });
}

/* Закрывать модальное окно регулировки температуры по кнопке Закрыть */
document.querySelector('.temp-modal .close-modal').addEventListener('click', function() {
    document.querySelector('.temp-modal').classList.remove('visible');
    document.querySelector('.page-wrapper').classList.remove('blur');
});

/* Закрывать модальное окно регулировки температуры по кнопке Применить */
document.querySelector('.temp-modal .save-modal').addEventListener('click', function() {
    document.querySelector('.temp-modal').classList.remove('visible');
    document.querySelector('.page-wrapper').classList.remove('blur');
});

/* Закрывать модальное окно регулировки света по кнопке Закрыть */
document.querySelector('.light-modal .close-modal').addEventListener('click', function() {
    document.querySelector('.light-modal').classList.remove('visible');
    document.querySelector('.page-wrapper').classList.remove('blur');
});

/* Закрывать модальное окно регулировки света по кнопке Применить */
document.querySelector('.light-modal .save-modal').addEventListener('click', function() {
    document.querySelector('.light-modal').classList.remove('visible');
    document.querySelector('.page-wrapper').classList.remove('blur');
});

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

/* Закрывать модальное окно регулировки температуры пола по кнопке Закрыть */
document.querySelector('.floor-modal .close-modal').addEventListener('click', function() {
    document.querySelector('.floor-modal').classList.remove('visible');
    document.querySelector('.page-wrapper').classList.remove('blur');
});

/* Закрывать модальное окно регулировки температуры пола по кнопке Применить */
document.querySelector('.floor-modal .save-modal').addEventListener('click', function() {
    document.querySelector('.floor-modal').classList.remove('visible');
    document.querySelector('.page-wrapper').classList.remove('blur');
});
