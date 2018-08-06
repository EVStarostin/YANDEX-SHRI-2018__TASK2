/* Показывать/прятать двойную стрелку вверх при скролле плашек с устройствами в разделе главное */
document.querySelector('.devices').addEventListener('scroll', function (e) {
    if (this.scrollTop !== 0) {
        this.classList.add('scrolled');
    } else {
        this.classList.remove('scrolled');   
    }
});

/* Показывать/прятать меню при клике по кнопке */
document.querySelector('.menu-btn').addEventListener('click', function (e) {
    document.querySelector('.menu').classList.toggle('visible');
    document.querySelector('.header-and-main').classList.toggle('menu-visible');
});

/* Закрывать модальное окно регулировки температуры по кнопке Закрыть */
document.querySelector('.temp-modal .close-modal').addEventListener('click', function(e) {
    document.querySelector('.temp-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

/* Закрывать модальное окно регулировки температуры по кнопке Применить */
document.querySelector('.temp-modal .save-modal').addEventListener('click', function(e) {
    document.querySelector('.temp-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

/* Закрывать модальное окно регулировки света по кнопке Закрыть */
document.querySelector('.light-modal .close-modal').addEventListener('click', function(e) {
    document.querySelector('.light-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

/* Закрывать модальное окно регулировки света по кнопке Применить */
document.querySelector('.light-modal .save-modal').addEventListener('click', function(e) {
    document.querySelector('.light-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

/* Фильтр в разделе избранные устройства */
var filterButtons = document.querySelectorAll('.section-fav-devides .filter button');
for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function(e) {
        /* Добавляем нажатой кнопке класс active, у остальных кнопок удаляем */
        this.classList.add('active');
        for (var j = 0; j < filterButtons.length; j++) {
            if (filterButtons[j] !== this) {
                filterButtons[j].classList.remove('active');
            }
        }
        /* Прячем все устройства, у которых атрубит data-filter не равен атрибуту кликнутой кнопки */
        var devices = document.querySelectorAll('.section-fav-devides .fav-devides li');
        for (var k = 0; k < devices.length; k++) {
            if (this.dataset.filter === 'Все') {
                devices[k].style.display = "block";
            } else if (devices[k].dataset.filter !== this.dataset.filter) {
                devices[k].style.display = "none";
            } else {
                devices[k].style.display = "block";
            }
        }
        // Меняем прозрачность стрелки вправо, если все устройства помещаются на экране
        if (document.querySelector('.fav-devides').clientWidth < document.querySelector('.fav-devides').scrollWidth) {
            document.querySelector('.section-fav-devides .right').style.opacity = '1';
        } else {
            document.querySelector('.section-fav-devides .right').style.opacity = '.3';
        }
    });
}

// Меняем прозрачность стрелки вправо, если устройства не помещаются на экране
window.addEventListener('load', function(e) {
    if (document.querySelector('.fav-devides').clientWidth < document.querySelector('.fav-devides').scrollWidth) {
        document.querySelector('.section-fav-devides .right').style.opacity = '1';
    }
})

/* Обработка нажатия на кнопку влево в разделе избранные устройства */
document.querySelector('.section-fav-devides .left').addEventListener('click', function(e) {
    document.querySelector('.fav-devides').scrollLeft -= 215;
});

/* Обработка нажатия на кнопку вправо в разделе избранные устройства */
document.querySelector('.section-fav-devides .right').addEventListener('click', function(e) {
    document.querySelector('.fav-devides').scrollLeft += 215;
});

// При скролле меняем прозрачность кнопок если дальше скролить нельзя
document.querySelector('.fav-devides').addEventListener('scroll', function(e) {
    if (this.scrollLeft <= 0) {
        document.querySelector('.section-fav-devides .left').style.opacity = '.3';
    } else {
        document.querySelector('.section-fav-devides .left').style.opacity = '1';
    }
    if (this.clientWidth + this.scrollLeft >= this.scrollWidth) {
        document.querySelector('.section-fav-devides .right').style.opacity = '.3';
    } else {
        document.querySelector('.section-fav-devides .right').style.opacity = '1';
    }
});

/* Обработка выбора режима в модальном окне */
var modes = document.querySelectorAll('.modal .mode button');
for (var i = 0; i < modes.length; i++) {
    modes[i].addEventListener('click', function(e) {
        /* Добавляем нажатой кнопке класс active, у остальных кнопок удаляем */
        this.classList.add('active');
        for (var j = 0; j < modes.length; j++) {
            if (modes[j] !== this) {
                modes[j].classList.remove('active');
            }
        }
    });
}
