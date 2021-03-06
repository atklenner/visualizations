let array = [];
let cycles = 0;
let reset;

function setup() {
  createCanvas(windowWidth, windowHeight);
  array = new Array(width);
  for (let i = 0; i < width; i++) {
    // array[i] = random(height);
    array[i] = noise(i / 100.0) * height;
  }
  reset = createButton("Reset");
  reset.position(0, 0);
  reset.mousePressed(resetSort);
}

function resetSort() {
  loop();
  cycles = 0;
  for (let i = 0; i < width; i++) {
    array[i] = random(height);
  }
}

function draw() {
  background(0);
  array.forEach((value, index) => {
    stroke(255);
    line(index, height, index, height - value);
  });
  if (cycles < array.length) {
    for (let i = 0; i < width - 1; i++) {
      if (array[i] > array[i + 1]) {
        let val = array[i + 1];
        array[i + 1] = array[i];
        array[i] = val;
      }
    }
  } else {
    noLoop();
  }
  cycles++;
}
