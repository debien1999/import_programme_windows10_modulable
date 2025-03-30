// Abaisser la fenêtre dans la barre (minimiser)
function abaisserDansBarre(id) {
  const fen = document.getElementById(id);
  if (fen) fen.style.display = 'none';
}