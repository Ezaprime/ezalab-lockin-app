// Applique le thème mémorisé avant le premier affichage, pour éviter un éclair de la mauvaise couleur.
(function () {
  var t = null
  try { t = localStorage.getItem('lockin.theme') } catch (e) {}
  if (t !== 'clair' && t !== 'sombre') t = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'clair' : 'sombre'
  document.documentElement.dataset.theme = t
})()
