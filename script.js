async function obtenerLibros() {
    try {
        const respuesta = await fetch('https://backend-production-3a6e.up.railway.app/api/autor/getLibAut');
        const datos = await respuesta.json();
        
        if (datos.msg === "OK") {
            mostrarLibros(datos.info);
        } else {
            console.error("Error al obtener los datos de la API.");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}

function mostrarLibros(libros) {
    const tabla = document.getElementById('libros').getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";

    libros.forEach(libro => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${libro.isbn}</td>
            <td>${libro.titulo}</td>
            <td>${libro.ragar.nombre}</td>
        `;
        tabla.appendChild(fila);
    });
}

obtenerLibros();