document.getElementById('toggle-button').addEventListener('click', function() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more-text');
    var button = document.getElementById('toggle-button');
    
    if (moreText.style.display === 'none') {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        button.textContent = ' Ẩn bớt';
    } else {
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        button.textContent = 'Xem thêm';
    }
});
