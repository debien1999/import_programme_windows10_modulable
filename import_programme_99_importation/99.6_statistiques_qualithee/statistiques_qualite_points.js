// Suivi dynamique des points qualité par module
const suiviQualite = [];

function enregistrerQualite(module, score, commentaire) {
  const point = {
    module,
    score,
    commentaire,
    horodatage: new Date().toISOString()
  };
  suiviQualite.push(point);
  console.log('📊 Point qualité ajouté :', point);
}
