/* Меняем прозрачность стрелки вправо в разделе избранные сценарии, если сценарии не помещаются на экране */
window.addEventListener('load', function() {
    document.querySelector('.section-scenarios .left').disabled = true;
    if (document.querySelector('.scenarios').clientHeight < document.querySelector('.scenarios').scrollHeight) {
        document.querySelector('.section-scenarios .right').style.opacity = '1';
    } else {
        document.querySelector('.section-scenarios .right').disabled = true;
    }
})

/* Обработка нажатия на кнопку влево в разделе избранные устройства */
document.querySelector('.section-scenarios .left').addEventListener('click', function() {
    var scenarios = document.querySelector('.scenarios');
    scenarios.style.opacity = '0';
    setTimeout(function() {
        scenarios.scrollTop -= 346;
        scenarios.style.opacity = '1';
    }, 200);
});

/* Обработка нажатия на кнопку вправо в разделе избранные устройства */
document.querySelector('.section-scenarios .right').addEventListener('click', function() {
    var scenarios = document.querySelector('.scenarios');
    scenarios.style.opacity = '0';
    setTimeout(function() {
        scenarios.scrollTop += 346;
        scenarios.style.opacity = '1';
    }, 200);
});

/* При скролле меняем прозрачность кнопок если дальше скролить нельзя */
document.querySelector('.scenarios').addEventListener('scroll', function() {
    var leftBtn = document.querySelector('.section-scenarios .left'),
        rightBtn =  document.querySelector('.section-scenarios .right');
    if (this.scrollTop <= 0) {
        leftBtn.style.opacity = '.3';
        leftBtn.disabled = true;
    } else {
        leftBtn.style.opacity = '1';
        leftBtn.disabled = false;
    }
    if (this.clientHeight + this.scrollTop >= this.scrollHeight) {
        rightBtn.style.opacity = '.3';
        rightBtn.disabled = true;
    } else {
        rightBtn.style.opacity = '1';
        rightBtn.disabled = false;
    }
});