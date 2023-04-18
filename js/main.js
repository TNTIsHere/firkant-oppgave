let square = document.getElementById("square"); // Velger "square" ID-en i HTML koden
let enemySquare = document.getElementById("enemySquare") // Velger "enemySquare" ID-en i HTML koden
let scoreElement = document.getElementById("score") // Velger "score" ID-en i HTML koden
let posX = window.innerWidth / 2 - square.offsetWidth / 2; // Regner ut startposisjonen på spillerfirkanten i bredden
let posY = window.innerHeight / 2 - square.offsetHeight / 2; // Regner ut startposisjonen på spillerfirkanten i høyden
let posX2 = Math.floor(Math.random() * window.innerWidth); // Regner ut startposisjonen på fiendefirkanten i bredden
let posY2 = Math.floor(Math.random() * window.innerHeight); // Regner ut startposisjonen på fiendefirkanten i høyden
let score = 0; // Definerer og initsialiserer en variabel som heter score med verdi 0
square.style.left = posX + 'px'; // Setter startposisjon for spillerfirkanten i bredden
square.style.top = posY + 'px'; // Setter startposisjon for spillerfirkanten i høyden
enemySquare.style.left = posX2 + 'px'; // Setter startposisjon for fiendefirkanten i bredden
enemySquare.style.top = posY2 + 'px'; // Setter startposisjon for fiendefirkanten i høyden
let squareWidth = enemySquare.offsetWidth; // Definerer bredden på fiendefirkanten
let squareHeight = enemySquare.offsetHeight; // Definerer høyden på fiendefirkanten

// Sjekk hvis firkanten er på toppen av skjermen + gå oppover funksjon
function moveUp() {
  if (posY > 0) {
    posY -= 30;
    square.style.top = posY + 'px';
  }
}

// Sjekk hvis firkanten er på bunnen av skjermen + gå nedover funksjon
function moveDown() {
  if (posY < window.innerHeight - square.offsetHeight) {
    posY += 30;
    square.style.top = posY + 'px';
  }
}

// Sjekk hvis firkanten er til venstre av skjermen + gå til venstre funksjon
function moveLeft() {
  if (posX > 0) {
    posX -= 30;
    square.style.left = posX + 'px';
  }
}

// Sjekk hvis firkanten er til høyre av skjermen + gå til høyre funksjon
function moveRight() {
  if (posX < window.innerWidth - square.offsetWidth) {
    posX += 30;
    square.style.left = posX + 'px';
  }
}

// Funksjon for å flytte fiendefirkanten en tilfeldig retning
function moveRandomly() {
  let directions = ['up', 'down', 'left', 'right'];
  let randomDirection = directions[Math.floor(Math.random() * directions.length)];

// Defineret at den skal flytte med 30px om gangen, samme som spilleren.
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

// If check på om firkantene er oppe på hverandre, hvis ja så skal score fjernes med 10, det er en setinterval koblet til dette med tid på 1000. Ellers bare plusser den "score" med 1
function scoreSystem() {
    if (posX + square.offsetWidth > posX2 && posX < posX2 + enemySquare.offsetWidth && posY + square.offsetHeight > posY2 && posY < posY2 + enemySquare.offsetHeight) {
        score -= 10;
      } else {
        score++;
      }
      scoreElement.innerHTML = score;
}

// Øke størrelsen på fiendefirkanten etter hvert minutt og med 10% for hver gang
function increaseSize() {
    squareWidth *= 1.1;
    squareHeight *= 1.1;
    enemySquare.style.width = squareWidth + 'px';
    enemySquare.style.height = squareHeight + 'px';
  }

  // Definerer wasd som knappene for å flytte firkanten
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
// Setintervals for å definere når fienden skal flytte på seg, hvor ofte fiendefirkanten øker i størrelse og poengsystemet

setInterval(increaseSize, 60 * 1000);
setInterval(moveRandomly, 100);
setInterval(scoreSystem, 1000);