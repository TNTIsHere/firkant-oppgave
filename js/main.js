let square = document.getElementById("square");
let enemySquare = document.getElementById("enemySquare")
let scoreElement = document.getElementById("score")
let posX = window.innerWidth / 2 - square.offsetWidth / 2;
let posY = window.innerHeight / 2 - square.offsetHeight / 2;
let posX2 = Math.floor(Math.random() * window.innerWidth);
let posY2 = Math.floor(Math.random() * window.innerHeight);
let score = 0;
square.style.left = posX + 'px';
square.style.top = posY + 'px';
enemySquare.style.left = posX2 + 'px';
enemySquare.style.top = posY2 + 'px';
let squareWidth = enemySquare.offsetWidth;
let squareHeight = enemySquare.offsetHeight;


function moveUp() {
  if (posY > 0) {
    posY -= 30;
    square.style.top = posY + 'px';
  }
}

function moveDown() {
  if (posY < window.innerHeight - square.offsetHeight) {
    posY += 30;
    square.style.top = posY + 'px';
  }
}

function moveLeft() {
  if (posX > 0) {
    posX -= 30;
    square.style.left = posX + 'px';
  }
}

function moveRight() {
  if (posX < window.innerWidth - square.offsetWidth) {
    posX += 30;
    square.style.left = posX + 'px';
  }
}

function moveRandomly() {
  let directions = ['up', 'down', 'left', 'right'];
  let randomDirection = directions[Math.floor(Math.random() * directions.length)];


  let increment = 30;
  if (randomDirection === 'up' && posY2 > 0) {
    posY2 -= increment;
    enemySquare.style.top = posY2 + 'px';
  } else if (randomDirection === 'down' && posY2 < window.innerHeight - enemySquare.offsetHeight) {
    posY2 += increment;
    enemySquare.style.top = posY2 + 'px';
  } else if (randomDirection === 'left' && posX2 > 0) {
    posX2 -= increment;
    enemySquare.style.left = posX2 + 'px';
  } else if (randomDirection === 'right' && posX2 < window.innerWidth - enemySquare.offsetWidth) {
    posX2 += increment;
    enemySquare.style.left = posX2 + 'px';
  }
}

function scoreSystem() {
    if (posX + square.offsetWidth > posX2 && posX < posX2 + enemySquare.offsetWidth && posY + square.offsetHeight > posY2 && posY < posY2 + enemySquare.offsetHeight) {
        score -= 10;
      } else {
        score++;
      }
      scoreElement.innerHTML = score;
}

function increaseSize() {
    squareWidth *= 1.1;
    squareHeight *= 1.1;
    enemySquare.style.width = squareWidth + 'px';
    enemySquare.style.height = squareHeight + 'px';
  }

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    moveUp();
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    moveDown();
  } else if (event.key === 'ArrowLeft' || event.key === 'a') {
    moveLeft();
  } else if (event.key === 'ArrowRight' || event.key === 'd') {
    moveRight();
  }
});
setInterval(increaseSize, 60 * 1000);
setInterval(moveRandomly, 100);
setInterval(scoreSystem, 1000);