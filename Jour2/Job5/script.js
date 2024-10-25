window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    const colorValue = Math.floor((255 * scrollPercent) / 100);
    
    footer.style.backgroundColor = `rgb(${colorValue}, 0, 0)`;
});
