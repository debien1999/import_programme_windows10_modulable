// Colonne droite des paramètres
function afficherParametre(parametre) {
  const zone = document.getElementById('zone-parametres');
  zone.innerHTML = `<h2>${parametre}</h2><p>Contenu personnalisé pour ${parametre}</p>`;
}