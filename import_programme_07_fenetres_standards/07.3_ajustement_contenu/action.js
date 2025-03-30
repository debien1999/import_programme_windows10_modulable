// Ajuster la taille de la fenêtre à son contenu
function ajusterAuContenu(id) {
  const fen = document.getElementById(id);
  if (fen) {
    fen.style.width = fen.scrollWidth + 'px';
    fen.style.height = fen.scrollHeight + 'px';
  }
}