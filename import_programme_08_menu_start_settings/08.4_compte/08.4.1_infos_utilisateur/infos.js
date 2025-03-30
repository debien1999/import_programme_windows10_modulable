// Affichage des infos du compte utilisateur actif
function afficherInfosUtilisateur(utilisateur) {
  const zone = document.getElementById('zone-infos');
  if (!zone) return;
  zone.innerHTML = `
    <h3>Nom : ${utilisateur.nom}</h3>
    <p>Email : ${utilisateur.email}</p>
    <p>Mot de passe : ••••••••</p>
    <p>Date de création : ${utilisateur.creation}</p>
  `;
}