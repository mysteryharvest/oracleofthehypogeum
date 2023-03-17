const imageData = [
  {
    fileName: 'achocard.png',
    description: 'Stability. A firm foundation. Sentience within the inanimate.'
  },
  {
    fileName: 'aircard.png',
    description: 'The root of Air. Intellect. Meaning depends on card context.'
  },
  {
    fileName: 'animalcard.png',
    description: 'Something obvious.'
  },
  {
    fileName: 'animalculecard.png',
    description: 'Raw, unfettered magic. A minuscule change without which a system would collapse. Transformation/inner alchemy.'
  }
];

let button;
let img1, img2;
let imgText1, imgText2;
let images = [];
let texts = [];

function preload() {
  // Load images and descriptions
  for (let i = 0; i < imageData.length; i++) {
    images.push(loadImage(imageData[i].fileName));
    texts.push(imageData[i].description);
  }
}

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);

  button = createButton("Generate Images");
  button.position(width / 2 - button.width / 2, height - 50);
  button.mousePressed(generateImages);

  generateImages();
}

function draw() {
  background(255);

  // Display images
  image(img1, width * 0.25 - img1.width / 2, height / 2 - img1.height / 2);
  image(img2, width * 0.75 - img2.width / 2, height / 2 - img2.height / 2);

  // Display image descriptions
  textSize(16);
  fill(0);
  text(imgText1, width * 0.25, height / 2 + img1.height / 2 + 30);
  text(imgText2, width * 0.75, height / 2 + img2.height / 2 + 30);
}

function generateImages() {
  let randomIndex1 = floor(random(images.length));
  let randomIndex2 = floor(random(images.length));

  while (randomIndex1 === randomIndex2) {
    randomIndex2 = floor(random(images.length));
  }

  img1 = images[randomIndex1];
  img2 = images[randomIndex2];
  
  img1.resize(300, 500);
  img2.resize(300, 500);

  imgText1 = texts[randomIndex1];
  imgText2 = texts[randomIndex2];
}
