import './round-slider.js';
import './slider.js';

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
    var leftBtn = document.querySelector('.section-fav-devices .left'),
        rightBtn = document.querySelector('.section-fav-devices .right');

    if (this.scrollLeft <= 0) {
        leftBtn.style.opacity = '.3';
    } else {
        leftBtn.style.opacity = '1';
    }
    if (this.clientWidth + this.scrollLeft >= this.scrollWidth) {
        rightBtn.style.opacity = '.3';
    } else {
        rightBtn.style.opacity = '1';
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

function showModal(modal, that) {
    var modalWrapper = modal.querySelector('.modal-wrapper'),
        pageWrapper = document.querySelector('.page-wrapper');
    var centerX = document.documentElement.clientWidth / 2,
        centerY = document.documentElement.clientHeight / 2;
    var X = that.getBoundingClientRect().left + that.getBoundingClientRect().width / 2 - centerX,
        Y = that.getBoundingClientRect().top + that.getBoundingClientRect().height / 2 - centerY;
    modalWrapper.style.transform = 'translate('+X+'px, '+Y+'px) scale(.3)';
    modal.classList.add('visible');
    setTimeout(function() {
        modalWrapper.style.cssText = '';
        modal.classList.add('animate');
        pageWrapper.classList.add('blur');
    }, 100);
}

for (var i = 0; i < favDevices.length; i++) {
    favDevices[i].addEventListener('click', function() {
        if (this.parentElement.dataset.type === 'temp') {
            var modal = document.querySelector('.temp-modal');
            var icon = modal.querySelector('.icon-temp');
            modal.querySelector('.name').innerText = this.querySelector('.name').innerText;
            modal.querySelector('.status').innerText = this.querySelector('.action').innerText;
            if (this.parentElement.dataset.power === 'on') {
                icon.classList.remove('powerOff');
                icon.classList.add('powerOn');
            } else {
                icon.classList.remove('powerOn');
                icon.classList.add('powerOff');
            }
            var that = this
            showModal(modal, that);
        } else if (this.parentElement.dataset.type === 'light') {
            var modal = document.querySelector('.light-modal');
            var icon = modal.querySelector('.icon-light');
            modal.querySelector('.name').innerText = this.querySelector('.name').innerText;
            modal.querySelector('.status').innerText = this.querySelector('.action').innerText;
            if (this.parentElement.dataset.power === 'on') {
                icon.classList.remove('powerOff');
                icon.classList.add('powerOn');
            } else {
                icon.classList.remove('powerOn');
                icon.classList.add('powerOff');
            }
            var that = this
            showModal(modal, that);
        } else if (this.parentElement.dataset.type === 'floor') {
            var modal = document.querySelector('.floor-modal');
            var icon = modal.querySelector('.icon-temp');
            modal.querySelector('.name').innerText = this.querySelector('.name').innerText;
            modal.querySelector('.status').innerText = this.querySelector('.action').innerText;
            if (this.parentElement.dataset.power === 'on') {
                icon.classList.remove('powerOff');
                icon.classList.add('powerOn');
            } else {
                icon.classList.remove('powerOn');
                icon.classList.add('powerOff');
            }
            var that = this
            showModal(modal, that);
        }
    });
}

/* Закрывать модальное окно регулировки температуры по кнопке Закрыть */
function closeModal(modal) {
    modal.classList.remove('visible');
    modal.classList.remove('animate');
    document.querySelector('.page-wrapper').classList.remove('blur');
}

document.querySelector('.temp-modal .close-modal').addEventListener('click', function() {
    var modal = document.querySelector('.temp-modal');
    closeModal(modal);
});

/* Закрывать модальное окно регулировки температуры по кнопке Применить */
document.querySelector('.temp-modal .save-modal').addEventListener('click', function() {
    var modal = document.querySelector('.temp-modal');
    closeModal(modal);
});

/* Закрывать модальное окно регулировки света по кнопке Закрыть */
document.querySelector('.light-modal .close-modal').addEventListener('click', function() {
    var modal = document.querySelector('.light-modal');
    closeModal(modal);
});

/* Закрывать модальное окно регулировки света по кнопке Применить */
document.querySelector('.light-modal .save-modal').addEventListener('click', function() {
    var modal = document.querySelector('.light-modal');
    closeModal(modal);
});

/* Закрывать модальное окно регулировки температуры пола по кнопке Закрыть */
document.querySelector('.floor-modal .close-modal').addEventListener('click', function() {
    var modal = document.querySelector('.floor-modal');
    closeModal(modal);
});

/* Закрывать модальное окно регулировки температуры пола по кнопке Применить */
document.querySelector('.floor-modal .save-modal').addEventListener('click', function() {
    var modal = document.querySelector('.floor-modal');
    closeModal(modal);
});

/* Показывать/прятать меню фильтра в мобильной версии */
document.querySelector('.show-filter-btn').addEventListener('click', function() {
    document.querySelector('.filter').classList.toggle('visible');
});