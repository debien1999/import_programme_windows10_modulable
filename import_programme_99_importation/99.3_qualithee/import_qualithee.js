// Vérification qualité de l'import
function verifierImportQualithee(url, callback) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('HTTP Error ' + response.status);
      return response.text();
    })
    .then(code => {
      if (code.length > 50) {
        console.log('✔ Import validé, code long suffisant');
        callback(true);
      } else {
        throw new Error('Code trop court');
      }
    })
    .catch(err => {
      console.error('⚠️ Import échoué :', err);
      callback(false);
    });
}
