// Importation automatique intelligente
async function importerModules(modules) {
  for (let m of modules) {
    try {
      await import(`./${m}`);
      console.log(`✅ Module ${m} importé`);
    } catch (e) {
      console.error(`❌ Erreur import ${m}`, e);
    }
  }
}
