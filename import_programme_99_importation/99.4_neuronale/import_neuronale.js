// Simulation d'importation neuronale
function importNeuronaleSimulee(data) {
  const poids = Math.random();
  const neurones = data.map(val => val * poids);
  console.log('🧠 Neuronal Import :', neurones);
  return neurones;
}
