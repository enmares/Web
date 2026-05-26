function scrollCarrusel(direccion) {
    const contenedor = document.getElementById('proyectos-destacados');
    const anchoArticulo = contenedor.clientWidth; // Detecta el 100% del ancho actual
    
    contenedor.scrollBy({
        left: direccion * anchoArticulo,
        behavior: 'smooth'
    });
}

/*Acordeón de tecnologías */

document.querySelectorAll('.acordeon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const contenido = btn.nextElementSibling;

        const abierto = contenido.style.maxHeight;

        if (abierto) {
            contenido.style.maxHeight = null;
            btn.textContent = '▶ Tecnologías';
        } else {
            contenido.style.maxHeight = contenido.scrollHeight + 'px';
            btn.textContent = '▼ Tecnologías';
        }
    });
});

