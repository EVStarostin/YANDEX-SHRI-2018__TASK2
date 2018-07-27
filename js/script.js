document.querySelector('.scroll.up').addEventListener('click', scroll);

function scroll() {
    var devices = document.querySelector('.devices');
    devices.style.marginTop = parseFloat(devices.style.marginTop) - 130 + 'px';
}
