let img = new Image();
img.src = './assets/ryu-sprite-sheet.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const scale = 2;
const width = 58;
const height = 105;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
        frameX, frameY, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight)
}

const animIntroData = [
   {frameX: 334, frameY: 16},
   {frameX: 395, frameY: 16},
   {frameX: 456, frameY: 16},
   {frameX: 521, frameY: 16},
   {frameX: 585, frameY: 16},
   {frameX: 644, frameY: 16},
   {frameX: 703, frameY: 16},
   {frameX: 760, frameY: 16},
   {frameX: 819, frameY: 16},
   {frameX: 877, frameY: 16},
]

const andimIdleData = [
    {frameX: 12, frameY: 120},
    {frameX: 75, frameY: 120},
    {frameX: 138, frameY: 120},
    {frameX: 202, frameY: 120},
    {frameX: 263, frameY: 120},
    {frameX: 326, frameY: 120},
]

// drawFrame(334 , 16, 0, 0,),
// drawFrame(395, 16, scaledWidth, 0,),
// drawFrame(456, 16, scaledWidth * 2, 0,),
// drawFrame(521, 16, scaledWidth * 3, 0,),
// drawFrame(585, 16, scaledWidth * 4, 0,),
// drawFrame(644, 16, scaledWidth * 5, 0,),
// drawFrame(703, 16, scaledWidth * 6, 0,),
// drawFrame(760, 16, scaledWidth * 7, 0,),
// drawFrame(819, 16, scaledWidth * 8, 0,),
// drawFrame(877, 16, scaledWidth * 9, 0,),
function init() {
    window.requestAnimationFrame(step);
  }

  let currentLoopIndex = 0;
  let frameCount = 0;

function step() {
    frameCount++;
    if(frameCount < 12){
        window.requestAnimationFrame(step);
        return
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(animIntroData[currentLoopIndex].frameX, 
        animIntroData[currentLoopIndex].frameY, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= animIntroData.length) {
      currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);