// Fermer une fenêtre avec animation
function fermerFenetre(id) {
  const fenetre = document.getElementById(id);
  if (!fenetre) return;
  fenetre.style.transition = "opacity 0.3s ease-out";
  fenetre.style.opacity = 0;
  setTimeout(() => fenetre.remove(), 300);
}