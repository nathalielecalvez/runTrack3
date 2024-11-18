document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('quote').style.display = 'block';
    document.getElementById('hideButton').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('hideButton').addEventListener('click', function() {
    document.getElementById('quote').style.display = 'none';
    document.getElementById('showButton').style.display = 'block';
    this.style.display = 'none';
});
