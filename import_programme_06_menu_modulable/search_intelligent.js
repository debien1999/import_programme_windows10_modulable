// Recherche intelligente
function rechercher(programmes, requete) {
  return programmes.filter(p => p.toLowerCase().includes(requete.toLowerCase()));
}
