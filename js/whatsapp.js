document.addEventListener("DOMContentLoaded", function() {
  // Detectar si el usuario está en móvil o escritorio
  var isMobile = /iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  
  // Obtener todos los enlaces de WhatsApp en la página
  var whatsappLinks = document.querySelectorAll("a#lead_whatsapp");

  // Recorrer los enlaces y cambiar el href según el dispositivo
  whatsappLinks.forEach(function(link) {
      var mobileLink = "https://wa.me/593968493326?text=👋Hola,%20estoy%20interesado%20en%20las%20etiquetas%20de%20seguridad";
      var desktopLink = "https://web.whatsapp.com/send?phone=593968493326&text=👋Hola,%20estoy%20interesado%20en%20las%20etiquetas%20de%20seguridad";
      
      // Asignar el enlace adecuado
      if (isMobile) {
          link.setAttribute("href", mobileLink);
      } else {
          link.setAttribute("href", desktopLink);
      }
  });
});
