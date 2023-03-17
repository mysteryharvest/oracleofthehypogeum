const imageFilenames = [
  'achocard.png',
  'aircard.png',
  'animalcard.png',
  'animalculecard.png',
  'anthuorcard.png',
  'barbarocard.png',
  'buorthcard.png',
  'cavecard.png',
  'eggcard.png',
  'firecard.png',
  'forestcard.png',
  'fungicard.png',
  'humancard.png',
  'insectcard.png',
  'lifeforcecard.png',
  'lightcard.png',
  'magician-akker-card.png',
  'magician-azer-card.png',
  'magician-mether-card.png',
  'magician-pip-card.png',
  'magician-sezar-card.png',
  'magician-tan-card.png',
  'magician-tether-card.png',
  'magician-yan-card.png',
  'maidencard.png',
  'memlencard.png',
  'monster-djerr-card.png',
  'monster-djeuwet-card.png',
  'monster-gneuth-card.png',
  'monster-gnew-card.png',
  'monster-kehket-card.png',
  'monster-kekew-card.png',
  'monster-wehneh-card.png',
  'monster-weweu-card.png',
  'mountaincard.png',
  'musiciancard.png',
  'mysterycard.png',
  'plaincard.png',
  'plantcard.png',
  'shadowcard.png',
  'silencecard.png',
  'soilcard.png',
  'stonebookcard.png',
  'timehuntercard.png',
  'vernowcard.png',
  'watercard.png',
  'wormwoodcard.png'
];

let button;
let img1, img2;
let imgText1, imgText2;
let images = [];
let texts = [];

function preload() {
  // Load images
  for (let i = 0; i < imageFilenames.length; i++) {
    images.push(loadImage(imageFilenames[i]));
    texts.push(`Image ${i + 1} description`);
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
  text(imgText1, width * 0.25, height * 0.9);
  text(imgText2, width * 0.75, height * 0.9);
}

function generateImages() {
  let randomIndex1 = floor(random(images.length));
  let randomIndex2 = floor(random(images.length));

  while (randomIndex1 === randomIndex2) {
    randomIndex2 = floor(random(images.length));
  }

  img1 = images[randomIndex1];
  img2 = images[randomIndex2];

  imgText1 = texts[randomIndex1];
  imgText2 = texts[randomIndex2];
}
