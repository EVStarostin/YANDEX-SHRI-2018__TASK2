document.querySelector('.control').addEventListener('click', () => {
    var techBlock = document.querySelector('.tech-block');
    
    techBlock.style.marginTop = techBlock.style.marginTop ? parseFloat(techBlock.style.marginTop) - 50 + 'px' : '-50px';
});
