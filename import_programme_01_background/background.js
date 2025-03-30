// Module de fond d'écran Windows 10
function changerBackground(imagePath) {
  const bg = document.getElementById("background");
  if (bg) {
    bg.style.backgroundImage = `url(${imagePath})`;
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
  }
}
changerBackground("import_programme_01_background/windows10_background.jpg");
