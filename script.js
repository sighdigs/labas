// Preload images using JavaScript
function preloadImages(imageArray) {
    let loadedImages = 0;
    const totalImages = imageArray.length;

    imageArray.forEach((imageSrc) => {
        const img = new Image(); // Create a new image object
        img.src = imageSrc; // Set the source to the image path
        
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                console.log('All images have been preloaded');
            }
        };
    });
}

// List of images to preload
const imagesToPreload = [
    './images/image-1.jpg',
    './images/image-2.jpg',
    './images/image-3.jpg',
];

// Call the preload function
preloadImages(imagesToPreload);

let scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    // Smooth scroll with scrollLeft change
    scrollContainer.scrollLeft += event.deltaY;
});