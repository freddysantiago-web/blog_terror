// Usamos DOMContentLoaded para que JS espere a que el HTML esté listo
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Conexión exitosa!");

    function escribir(id, texto, vel) {
        let i = 0;
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = ""; // Limpiamos el contenido inicial
            function animar() {
                if (i < texto.length) {
                    el.innerHTML += texto.charAt(i);
                    i++;
                    setTimeout(animar, vel);
                }
            }
            animar();
        }
    }

    // 1. Ejecutar máquina de escribir en el Header
    escribir('maquina-escribir', "Donde las sombras cobran vida...", 100);
    
    // 2. Ejecutar en el título "Sobre el Blog"
    setTimeout(() => {
        escribir('titulo-blog', "Sobre el Blog", 120);
    }, 1500);

    // 3. Mostrar la descripción
    setTimeout(() => {
        const desc = document.getElementById('descripcion-blog');
        if (desc) desc.classList.add('visible');
    }, 3000);
});