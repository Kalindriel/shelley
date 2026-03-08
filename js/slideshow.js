(function() {
    const totalImages = 10;
    const intervalTime = 4000;
    let currentIndex = 0;
    const imageBase = 'gallery/about/image';
    const imageExt = '.jpg';

    // Preload images
    const preloadedImages = [];
    for (let i = 0; i < totalImages; i++) {
        const img = new Image();
        img.src = `${imageBase}${i}${imageExt}`;
        preloadedImages.push(img);
    }

    function startSlideshow() {
        const slideshowImg = document.getElementById('slideshow-image');
        if (!slideshowImg) return;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            slideshowImg.src = `${imageBase}${currentIndex}${imageExt}`;
        }, intervalTime);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startSlideshow);
    } else {
        startSlideshow();
    }
})();
