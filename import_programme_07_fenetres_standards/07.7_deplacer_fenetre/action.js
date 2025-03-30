// Déplacer une fenêtre en cliquant sur la barre du haut
function rendreDeplacable(id) {
  const fenetre = document.getElementById(id);
  const barre = fenetre.querySelector('.barre-titre');
  let offsetX = 0, offsetY = 0, isDragging = false;

  barre.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - fenetre.offsetLeft;
    offsetY = e.clientY - fenetre.offsetTop;
  });

  document.addEventListener('mouseup', () => isDragging = false);

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      fenetre.style.left = (e.clientX - offsetX) + 'px';
      fenetre.style.top = (e.clientY - offsetY) + 'px';
    }
  });
}