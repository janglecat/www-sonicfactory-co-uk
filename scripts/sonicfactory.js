/* Lightbox Gallery Script */
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll('.gallery a');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    galleryImages.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImage.src = image.href;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});

/* Google Analytics Script */
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-6M00YGCHY7');