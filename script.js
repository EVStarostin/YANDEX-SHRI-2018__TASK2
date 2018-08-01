document.querySelector('.devices').addEventListener('scroll', function(e) {
    if (this.scrollTop !== 0) {
        this.classList.add('scrolled');
    } else {
        this.classList.remove('scrolled');   
    }
});