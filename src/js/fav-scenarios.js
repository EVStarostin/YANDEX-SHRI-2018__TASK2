/* Меняем прозрачность стрелки вправо в разделе избранные сценарии, если сценарии не помещаются на экране */
window.addEventListener('load', function() {
    if (document.querySelector('.scenarios').clientHeight < document.querySelector('.scenarios').scrollHeight) {
        document.querySelector('.section-scenarios .right').style.opacity = '1';
    }
})

/* Обработка нажатия на кнопку влево в разделе избранные устройства */
document.querySelector('.section-scenarios .left').addEventListener('click', function() {
    document.querySelector('.scenarios').scrollTop -= 346;
});

/* Обработка нажатия на кнопку вправо в разделе избранные устройства */
document.querySelector('.section-scenarios .right').addEventListener('click', function() {
    document.querySelector('.scenarios').scrollTop += 346;
});

/* При скролле меняем прозрачность кнопок если дальше скролить нельзя */
document.querySelector('.scenarios').addEventListener('scroll', function() {
    if (this.scrollTop <= 0) {
        document.querySelector('.section-scenarios .left').style.opacity = '.3';
    } else {
        document.querySelector('.section-scenarios .left').style.opacity = '1';
    }
    if (this.clientHeight + this.scrollTop >= this.scrollHeight) {
        document.querySelector('.section-scenarios .right').style.opacity = '.3';
    } else {
        document.querySelector('.section-scenarios .right').style.opacity = '1';
    }
});