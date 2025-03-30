// Afficher la miniature du média sélectionné
function afficherMiniature(fileInputId, previewId) {
  const input = document.getElementById(fileInputId);
  const preview = document.getElementById(previewId);
  const file = input.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    preview.src = url;
  }
}