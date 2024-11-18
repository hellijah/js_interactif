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
  } else {
    secondCard.style.color = "green";
  }
});

/* fonctionnalité 5 */
const navbar = document.querySelector(".navbar");
const bootstrapLink = document.querySelector("link[rel='stylesheet']");

navbar.addEventListener("dblclick", () => {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false;
  } else {
    bootstrapLink.disabled = true;
  }
});
