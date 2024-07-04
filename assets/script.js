document.addEventListener('DOMContentLoaded', function() {
    // Select the dropdown button
    var dropdownBtn = document.querySelector('.dropdown-btn');
    
    // Toggle the dropdown container on click
    dropdownBtn.addEventListener('click', function() {
        var dropdownContainer = document.querySelector('.dropdown-container');
        if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {
            dropdownContainer.style.display = 'block';
        } else {
            dropdownContainer.style.display = 'none';
        }
    });
});

console.log('Hello, World!');

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var dropdownContainer = document.querySelector('.dropdown-container');
    if (width >= 768) {
        // Hide the dropdown menu on larger screens
        dropdownContainer.style.display = 'none';
    }
});