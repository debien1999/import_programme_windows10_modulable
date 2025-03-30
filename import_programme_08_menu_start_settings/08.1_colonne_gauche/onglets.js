// Onglets colonne gauche des paramètres
const onglets = ['Personnalisation', 'Affichage', 'Réseau', 'Heure & Langue', 'Confidentialité'];
function genererColonneGauche(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    onglets.forEach(nom => {
      const btn = document.createElement('button');
      btn.textContent = nom;
      btn.className = 'onglet-btn';
      container.appendChild(btn);
    });
  }
}