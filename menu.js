// Vælg HTML-elementerne
const burger = document.querySelector(".burger"); // Burger-menu ikonet, der åbner/lukker menuen
const nav = document.querySelector("nav"); // Navigationselementet, som indeholder menuen
const menu = document.querySelector(".menu"); // Menu-listen, hvor brugeren vælger sider

// Tilføj event listener til burger-menuen, så den reagerer på klik
burger.addEventListener("click", burgerClick);

// Funktion til at åbne/lukke menuen ved klik på burger-ikonet
function burgerClick() {
  burger.classList.toggle("active"); // Tilføjer eller fjerner "active"-klassen på burger-ikonet (ændrer udseende)
  nav.classList.toggle("active"); // Tilføjer eller fjerner "active"-klassen på navigationen (vis/skjul menuen)
}

// Tilføj event listener til menuen, så den lukker, når et menupunkt vælges
menu.addEventListener("click", menuClick);

// Funktion til at lukke menuen, når brugeren klikker på en menuindstilling
function menuClick() {
  burger.classList.remove("active"); // Fjerner "active"-klassen fra burger-ikonet (tilbage til standard ikon)
  nav.classList.remove("active"); // Fjerner "active"-klassen fra navigationen (skjuler menuen igen)
}
