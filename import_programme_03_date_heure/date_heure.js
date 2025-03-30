// Module date + heure en bas à droite
function updateClock() {
  const now = new Date();
  document.getElementById("heure").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toLocaleDateString();
}
setInterval(updateClock, 1000);
