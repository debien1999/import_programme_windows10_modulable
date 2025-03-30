// Statistiques d'importation
const stats = {
  total: 0,
  success: [],
  failed: []
};

function logStat(name, success) {
  stats.total++;
  (success ? stats.success : stats.failed).push(name);
  console.log(stats);
}
