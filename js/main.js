let square = document.getElementById('square');
let posX = window.innerWidth / 2 - square.offsetWidth / 2;
let posY = window.innerHeight / 2 - square.offsetHeight / 2;
square.style.left = posX + 'px';
square.style.top = posY + 'px';

function moveUp() {
    if (posY > 0) {
      posY -= 10;
      square.style.top = posY + 'px';
    } else {
      posY = 0;
      square.style.top = posY + 'px';
    }
  }

function moveDown() {
  if (posY < window.innerHeight - square.offsetHeight) {
    posY += 10;
    square.style.top = posY + 'px';
  }
}

function moveLeft() {
    if (posX > 0) {
      posX -= 10;
      square.style.left = posX + 'px';
    } else {
      posX = 0;
      square.style.left = posX + 'px';
    }
  }

function moveRight() {
  if (posX < window.innerWidth - square.offsetWidth) {
    posX += 10;
    square.style.left = posX + 'px';
  }
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