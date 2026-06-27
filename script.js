// Lógica para desplegar el menú en dispositivos móviles
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // Agrega o quita la clase 'active' para mostrar/ocultar los enlaces
    navLinks.classList.toggle('active');
});

// Lógica de interacción para el botón "Call to Action"
const joinBtn = document.getElementById('join-btn');

joinBtn.addEventListener('click', () => {
    alert('¡Bienvenido al sistema! Redirigiendo a la plataforma IKC...');
    // Aquí podrías agregar un window.location.href para redirigir a un login
});