document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set volume to 30%

    // Play music when user interacts with the page
    document.body.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    }, { once: true });
});

document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tooltip');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', showTooltip);
        tooltip.addEventListener('mouseout', hideTooltip);
    });

    function showTooltip(e) {
        const tooltipText = this.querySelector('.tooltiptext');
        const rect = this.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';

        // Проверяем, не выходит ли подсказка за верхнюю границу экрана
        if (rect.top - tooltipText.offsetHeight - 10 < 0) {
            tooltipText.style.bottom = 'auto';
            tooltipText.style.top = '125%';
            tooltipText.style.setProperty('--tooltip-arrow', 'top');
        } else {
            tooltipText.style.bottom = '125%';
            tooltipText.style.top = 'auto';
            tooltipText.style.setProperty('--tooltip-arrow', 'bottom');
        }
    }

    function hideTooltip(e) {
        const tooltipText = this.querySelector('.tooltiptext');
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
    }
});