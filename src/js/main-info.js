/* Показывать/прятать двойную стрелку вверх при скролле плашек с устройствами в разделе главное */
document.querySelector('.devices').addEventListener('scroll', function () {
    if (this.scrollTop !== 0) {
        this.classList.add('scrolled');
    } else {
        this.classList.remove('scrolled');   
    }
});