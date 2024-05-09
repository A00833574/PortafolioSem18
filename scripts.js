document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-images img');
        const buttons = carousel.querySelectorAll('.carousel-button');
        let currentIndex = 0;

        function showCurrentImage() {
            images.forEach((img, index) => {
                img.style.display = 'none';
                img.classList.remove('active');
            });
            images[currentIndex].style.display = 'block';
            images[currentIndex].classList.add('active');
        }

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (this.classList.contains('next')) {
                    currentIndex = (currentIndex + 1) % images.length;
                } else {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }
                showCurrentImage();
            });
        });

        showCurrentImage();
    });
});
