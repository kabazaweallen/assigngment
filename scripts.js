const images = [
    'zebra',
    'chitah',
    'monkey',
    'paris',
    'zebra',
    'chitah',
    'monkey',
    'paris'
];
let currentIndex = 0;

function openFullscreen(imageId, index) {
    currentIndex = index;
    const imageSrc = `images/${imageId}.jpg`;
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc;
    
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    fullscreenOverlay.style.display = 'flex';
}

function closeFullscreen() {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    fullscreenOverlay.style.display = 'none';
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) <= 0 ? (images.length - 1) : (currentIndex - 1);
    const imageSrc = `images/${images[currentIndex]}.jpg`;
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc;
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    const imageSrc = `images/${images[currentIndex]}.jpg`;
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc;
}
