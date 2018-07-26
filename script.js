var btnBottom = document.querySelector('.control.bottom');
var btnTop = document.querySelector('.control.top');

btnBottom.addEventListener('click', () => {
    var techBlock = document.querySelector('.tech-block');
    var mainBlock = document.querySelector('.block-main');

    var mainBlockHeight = parseFloat(mainBlock.clientHeight);
    var techBlockHeight = parseFloat(techBlock.clientHeight);

    techBlock.style.marginTop = techBlock.style.marginTop ? parseFloat(techBlock.style.marginTop) - 135 + 'px' : '-135px';

    if (Math.abs(parseFloat(techBlock.style.marginTop)) > techBlockHeight - mainBlockHeight) {
        btnBottom.disabled = true;
        btnBottom.style.visibility = 'hidden';
    }
    if (parseFloat(techBlock.style.marginTop) < 0) {
        btnTop.disabled = false;
        btnTop.style.visibility = 'visible';
    }
});

btnTop.addEventListener('click', () => {
    var techBlock = document.querySelector('.tech-block');
    var mainBlock = document.querySelector('.block-main');

    var mainBlockHeight = parseFloat(mainBlock.clientHeight);
    var techBlockHeight = parseFloat(techBlock.clientHeight);

    techBlock.style.marginTop = parseFloat(techBlock.style.marginTop) + 135 + 'px';

    if (Math.abs(parseFloat(techBlock.style.marginTop)) <= techBlockHeight - mainBlockHeight) {
        btnBottom.disabled = false;
        btnBottom.style.visibility = 'visible';
    }
    if (parseFloat(techBlock.style.marginTop) >= 0) {
        btnTop.disabled = true;
        btnTop.style.visibility = 'hidden';
    }
});

