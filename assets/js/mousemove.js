window.addEventListener("DOMContentLoaded", (event) => {
    // Récupérer l'élément du cercle
    const circle = document.getElementById("circle");

    // Définir le décalage du cercle par rapport au curseur
    const decalageX = 10;
    const decalageY = 10;

    // Variables pour enregistrer la position précédente du curseur
    let curseurX = 0;
    let curseurY = 0;

    // Fonction pour déplacer le cercle avec un décalage temporel
    const deplacerCercle = (event) => {
      // Calculer la nouvelle position du curseur
    const nouveauCurseurX = event.clientX - decalageX;
    const nouveauCurseurY = event.clientY - decalageY;

      // Calculer la différence entre la nouvelle et l'ancienne position du curseur
    const deplacementX = nouveauCurseurX - curseurX;
    const deplacementY = nouveauCurseurY - curseurY;

      // Mettre à jour la position précédente du curseur
    curseurX = nouveauCurseurX;
    curseurY = nouveauCurseurY;

      // Déplacer le cercle avec un décalage temporel
    setTimeout(() => {
        const cercleX = parseInt(circle.style.left) || 0;
        const cercleY = parseInt(circle.style.top) || 0;

        circle.style.left = `${cercleX + deplacementX}px`;
        circle.style.top = `${cercleY + deplacementY}px`;
      }, 50); // Temps de décalage (en millisecondes)
    };

    // Écouter les mouvements du curseur sur la fenêtre
    window.addEventListener("mousemove", deplacerCercle);
});