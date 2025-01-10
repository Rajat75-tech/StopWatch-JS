let timer,
  time = 0;

const display = document.getElementById("time-display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function format(ms) {
  const seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const millis = Math.floor((ms % 1000) / 10);

  let hText = hours;
  if (hours < 10) {
    hText = "0" + hours;
  }

  let mText = minutes;
  if (minutes < 10) {
    mText = "0" + minutes;
  }

  let sText = secs;
  if (secs < 10) {
    sText = "0" + secs;
  }

  let msText = millis;
  if (millis < 10) {
    msText = "0" + millis;
  }

  return `${hText}:${mText}:${sText}:${msText}`;
}

function formatSimple(ms) {
  const seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  let hText = hours;
  if (hours < 10) {
    hText = "0" + hours;
  }

  let mText = minutes;
  if (minutes < 10) {
    mText = "0" + minutes;
  }

  let sText = secs;
  if (secs < 10) {
    sText = "0" + secs;
  }

  return `${hText}:${mText}:${sText}`;
}

function start() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  const startTime = Date.now() - time;
  timer = setInterval(() => {
    time = Date.now() - startTime;
    display.textContent = format(time);
  }, 10);
}

function stop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  time = 0;
  display.textContent = formatSimple(time);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

display.textContent = formatSimple(time);

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

/* For Background Images */ 

const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg', 
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg',
    'images/img10.jpg',
    'images/img11.jpg',
    'images/img12.jpg',
    'images/img13.jpg',
    'images/img14.jpg'
];

let currentIndex = 0; 

function changeBackground() {
   
    document.body.style.opacity = 0; 
    setTimeout(() => {
        document.body.style.backgroundImage = `url(${images[currentIndex]})`;
        document.body.style.opacity = 1; 
        currentIndex = (currentIndex + 1) % images.length; 
    }, 500); 
}

setInterval(changeBackground, 5000); 