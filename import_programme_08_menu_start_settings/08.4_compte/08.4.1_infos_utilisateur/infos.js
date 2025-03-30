// Visualiser les infos du compte utilisateur actif
function afficherInfosUtilisateur(utilisateur) {
  const zone = document.getElementById('zone-infos');
  if (!zone) return;
  zone.innerHTML = `<h3>Compte : ${utilisateur.nom}</h3><p>Email: ${utilisateur.email}</p>`;
}