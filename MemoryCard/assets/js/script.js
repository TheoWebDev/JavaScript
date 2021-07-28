// Définition de la constante pour la récupération des cartes.

const cards = document.querySelectorAll('.memory-card');

// Rajout d'un écouteur sur les cartes.

cards.forEach(card => card.addEventListener('click', flipCard));

// Création des variables.

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

// Fonction de retournement de la carte.

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

// Fonction pour vérifier que les cartes sont identiques.

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

// Lorsque les deux cartes sont identiques, les "valider" et les empêcher de pouvoir être manipuler.

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

// Lorsque les deux cartes sont identiques, les "valider" et les empêcher de pouvoir être manipuler.

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

// Fonction cartes position aléatoire.

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

window.alert("Les règles du jeu \n La zone de jeu est composée de 12 cartes. \n Les cartes sont posées, faces cachées.\n Le joueur retourne 2 cartes, s'il fait une paire (soit 2 images identiques)\n S\'il ne trouve pas de paire, les cartes sont replacées au même endroit\n Il retente sa chance en retournant 2 nouvelles cartes\n La partie est terminée lorsqu'il a trouvé toutes les paires")