/* fonctionnalité 1 */
const footer = document.querySelector("footer");
footer.addEventListener("click", () => {
  console.log("clique");
});

/*fonctionnalité 1 bis */
let clickCount = 0;
footer.addEventListener("click", () => {
  clickCount++;
  console.log(`clic numéro ${clickCount}`);
});

/*fonctionnalité 2 */
const navbarToggle = document.querySelector(".navbar-toggler");
const navbarHeader = document.getElementById("navbarHeader");

navbarToggle.addEventListener("click", () => {
  navbarHeader.classList.toggle("collapse");
});


/* fonctionnalité 3 */
const firstCard = document.querySelector(".card");
const firstEditButton = firstCard.querySelector(".btn-outline-secondary");

firstEditButton.addEventListener("click", () => {
  firstCard.style.color = "red";
});


/* fonctionnalité 4 */
const secondCard = document.querySelectorAll(".card")[1];
const secondEditButton = secondCard.querySelector(".btn-outline-secondary");

secondEditButton.addEventListener("click", () => {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } 
  else {
    secondCard.style.color = "green";
  }
});

/* fonctionnalité 5 */
const navbar = document.querySelector(".navbar");
const bootstrapLink = document.querySelector("link[rel='stylesheet']");

navbar.addEventListener("dblclick", () => {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false; // réactive bootstrap
  } 
  else {
    bootstrapLink.disabled = true; // désactive bootstrap
  }
});


/* fonctionnalité 6 */
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const viewButton = card.querySelector(".btn.btn-sm.btn-success"); //bouton view
  const cardText = card.querySelector(".card-text");
  const cardImage = card.querySelector("img");

  viewButton.addEventListener("mouseenter", () => {
    cardText.style.display = "none"; // Cache le texte
    cardImage.style.width = "20%"; // Réduit l'image
  });

  viewButton.addEventListener("mouseleave", () => {
    cardText.style.display = ""; // Remet le texte
    cardImage.style.width = ""; // Taille normale
  });
});


/* fonctionnalité 7 */
const rightButton = document.querySelector(".btn.btn-secondary");
const cardContainer = document.querySelector(".album .row");

rightButton.addEventListener("click", (event) => {
  event.preventDefault(); // desactive le comportement par défaut du lien
  const lastCard = cardContainer.lastElementChild; // Dernière card
  cardContainer.insertBefore(lastCard, cardContainer.firstChild); // Passe en première position
});


/* fonctionalité 8 */
const leftButton = document.querySelector(".btn.btn-primary");

leftButton.addEventListener("click", (event) => {
  event.preventDefault(); // désactive le comportement par défaut du lien
  const firstCard = cardContainer.firstElementChild; // Première card
  cardContainer.appendChild(firstCard); // Passe en dernière position
});

/* fonctionalité 9 */

const logo = document.querySelector(".navbar-brand");
const body = document.querySelector("body");

document.addEventListener("keypress", (event) => {
  switch (event.key) {
    case "a":
    case "g": // 'a' ou 'g' pour tout aligner à gauche
      body.className = "col-4"; // Colonne gauche
      break;
    case "y":
    case "m": // 'y' ou 'm' pour tout centrer
      body.className = "col-4 offset-md-4"; // Colonne centrale
      break;
    case "p":
    case "d": // 'p' ou 'd' pour tout aligner à droite
      body.className = "col-4 offset-md-8"; // Colonne droite
      break;
    case "b":
    case "r": // 'b' ou 'r' pour réinitialiser
      body.className = ""; // Réinitialise la mise en page
      break;
    default:
      console.log("essaie une autre touche", event.key);
  }
});
