// Activer resize par coins
function activerResize(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.resize = "both";
    el.style.overflow = "auto";
  }
}