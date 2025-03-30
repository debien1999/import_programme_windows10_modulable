// Création de la fenêtre de connexion ou d'inscription
function afficherFenetreConnexion(mode = 'connexion') {
  const fenetre = document.createElement('div');
  fenetre.className = 'fenetre-connexion';
  fenetre.innerHTML = `
    <h2>Stellarion OS AI</h2>
    <div class='zone-form'>
      <label>Email :</label><input type='email' id='email'><br>
      <label>Mot de passe :</label><input type='password' id='motdepasse'><br>
      <label>Nom complet :</label><input type='text' id='nom'><br>
      <button onclick="${mode === 'connexion' ? 'connecterUtilisateur()' : 'validerNouvelUtilisateur()'}">
        ${mode === 'connexion' ? 'Connexion' : 'Créer un compte'}
      </button>
    </div>
  `;
  document.body.appendChild(fenetre);
}