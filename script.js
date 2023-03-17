const imageData = [
    // ... (Same imageData array as before)
];

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const generateBtn = document.getElementById('generate-btn');

function generateImages() {
    let randomIndex1 = Math.floor(Math.random() * imageData.length);
    let randomIndex2 = Math.floor(Math.random() * imageData.length);

    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * imageData.length);
    }

    image1.src = imageData[randomIndex1].fileName;
    image2.src = imageData[randomIndex2].fileName;
    description1.textContent = imageData[randomIndex1].description;
    description2.textContent = imageData[randomIndex2].description;
}

generateBtn.addEventListener('click', generateImages);

// Initial image generation
generateImages();
