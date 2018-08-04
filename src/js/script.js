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

document.querySelector('.close-modal').addEventListener('click', function(e) {
    document.querySelector('.modal').classList.remove('visible');
    document.body.classList.remove('blur');
});

document.querySelector('.save-modal').addEventListener('click', function(e) {
    document.querySelector('.modal').classList.remove('visible');
    document.body.classList.remove('blur');
});