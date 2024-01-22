// Sélectionnez l'élément du bouton
const btn = document.getElementById('btn');

// Sélectionnez l'élément de la navigation
const navLinks = document.querySelector('.navLinks');

// Ajoutez un écouteur d'événement au clic sur le bouton
btn.addEventListener('click', () => {
  // Ajoutez ou supprimez la classe 'burgermenu' à la navigation pour ouvrir ou fermer le menu
  navLinks.classList.toggle('burgermenu');
});