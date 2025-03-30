// Connexion ou inscription d'utilisateur
function connecterUtilisateur() {
  const email = document.getElementById('email').value;
  const mdp = document.getElementById('motdepasse').value;
  const user = JSON.parse(localStorage.getItem('user_' + email));
  if (user && user.mdp === mdp) {
    alert('Bienvenue ' + user.nom);
    afficherInfosUtilisateur(user);
  } else {
    alert('Identifiants incorrects');
  }
}

function validerNouvelUtilisateur() {
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const mdp = document.getElementById('motdepasse').value;
  creerNouveauCompte({ nom, email, mdp, creation: new Date().toLocaleString() });
}