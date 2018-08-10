import './round-slider.js'

/* Фильтр в разделе избранные устройства */
var filterButtons = document.querySelectorAll('.section-fav-devices .filter button');
for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
        document.querySelector('.filter').classList.remove('visible');
        document.querySelector('.show-filter-btn').innerText = this.innerText;
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

/* Меняем прозрачность стрелки вправо в разделе избранные устройства, если устройства не помещаются на экране */
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

/* Показывать/прятать меню фильтра в мобильной версии */
document.querySelector('.show-filter-btn').addEventListener('click', function() {
    document.querySelector('.filter').classList.toggle('visible');
});