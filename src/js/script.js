document.querySelector('.devices').addEventListener('scroll', function (e) {
    if (this.scrollTop !== 0) {
        this.classList.add('scrolled');
    } else {
        this.classList.remove('scrolled');   
    }
});

document.querySelector('.menu-btn').addEventListener('click', function (e) {
    document.querySelector('.menu').classList.toggle('visible');
    document.querySelector('.header-and-main').classList.toggle('menu-visible');
});

document.querySelector('.temp-modal .close-modal').addEventListener('click', function(e) {
    document.querySelector('.temp-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

document.querySelector('.temp-modal .save-modal').addEventListener('click', function(e) {
    document.querySelector('.temp-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

document.querySelector('.light-modal .close-modal').addEventListener('click', function(e) {
    document.querySelector('.light-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

document.querySelector('.light-modal .save-modal').addEventListener('click', function(e) {
    document.querySelector('.light-modal').classList.remove('visible');
    document.body.classList.remove('blur');
});