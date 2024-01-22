document.addEventListener('DOMContentLoaded', function() {
  const heartIcons = document.querySelectorAll('.icon');

  heartIcons.forEach((icon, index) => {
    icon.addEventListener('click', function() {
      // Verifica qual imagem está sendo exibida atualmente
      const iconSrc = icon.getAttribute('src');

      // Troca a imagem com base na imagem atual
      if (iconSrc === 'images/icon-heart.png') {
        icon.setAttribute('src', 'images/icon-heart-active.png');
      } else {
        icon.setAttribute('src', 'images/icon-heart.png');
      }
    });
  });
});
