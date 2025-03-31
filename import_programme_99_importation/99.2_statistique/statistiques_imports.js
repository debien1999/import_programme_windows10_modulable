// Module de statistiques avancées sur les imports
const statistiques = {
  total: 0,
  succes: 0,
  erreurs: 0,
  logs: []
};

function logImport(nom, status) {
  statistiques.total++;
  if (status) statistiques.succes++;
  else statistiques.erreurs++;
  statistiques.logs.push({ nom, status, date: new Date().toISOString() });
  console.table(statistiques);
}
