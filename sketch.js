let button;
let img1, img2;
let imgText1, imgText2;
let images = [];
let texts = [];

function preload() {
  // Load images (placeholders)
  for (let i = 0; i < 48; i++) {
    images.push(loadImage(`img_${i}.png`));
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
