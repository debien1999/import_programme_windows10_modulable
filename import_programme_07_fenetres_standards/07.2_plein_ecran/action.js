// Passer une fenêtre en plein écran
function passerPleinEcran(id) {
  const fenetre = document.getElementById(id);
  if (fenetre) {
    fenetre.style.position = 'fixed';
    fenetre.style.top = 0;
    fenetre.style.left = 0;
    fenetre.style.width = '100vw';
    fenetre.style.height = '100vh';
    fenetre.style.zIndex = 999;
  }
}