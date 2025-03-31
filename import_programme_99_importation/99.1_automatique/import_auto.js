// Importation automatique intelligente et récursive
document.addEventListener('DOMContentLoaded', async () => {
  const modules = ['module1.js', 'module2.js'];
  for (const mod of modules) {
    try {
      let result = await import(`../modules/${mod}`);
      console.log(`✅ ${mod} importé :`, result);
    } catch (e) {
      console.error(`❌ Erreur lors de l'import de ${mod}`, e);
    }
  }
});
