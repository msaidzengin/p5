i = 0;
speed = 1;
size = 500;
rectsize = 40;
function setup() {
  createCanvas(size, size);
}

function draw() {
  background(0);
  rect(i, i, rectsize, rectsize);
  rect(size - i - rectsize, size - i - rectsize, rectsize, rectsize);
  rect(size - i - rectsize, i, rectsize, rectsize);
  rect(i, size - i - rectsize, rectsize, rectsize);
  circle(size / 2, size / 2, rectsize * 2);
  i += speed;
  if (i >= size - rectsize) i = 0;
}