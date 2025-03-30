// Appliquer et enregistrer les paramètres de thème
function appliquerEtSauvegarder(theme) {
  localStorage.setItem('theme', JSON.stringify(theme));
  alert('Thème appliqué !');
}