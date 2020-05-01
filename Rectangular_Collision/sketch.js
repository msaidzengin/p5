i = 0;
speed = 1;
size = 500;
rectsize = 40;
function setup() {
  createCanvas(size, size);
}

function draw() {
  background(220);
  rect(i,i,rectsize,rectsize);
  rect(size-i-rectsize,size-i-rectsize,rectsize,rectsize);
  rect(size-i-rectsize,i,rectsize,rectsize);
  rect(i,size-i-rectsize,rectsize,rectsize);
  i += speed;
  if (i >= size - rectsize) i = 0;
}