// Création de compte utilisateur avec validation
function creerNouveauCompte(data) {
  if (!data.email || !data.nom || !data.mdp) {
    alert('Tous les champs sont requis');
    return;
  }
  // Simuler sauvegarde
  console.log('Création du compte pour :', data);
  localStorage.setItem('user_' + data.email, JSON.stringify(data));
  alert('Compte créé avec succès !');
}