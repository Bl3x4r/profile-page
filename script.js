function cambiarNombre(elemento) {
    let elementoNombreUsuario = document.querySelector("#userName");
    elementoNombreUsuario.innerText = "Martha Goméz";
}
function remSol(elemento,opcion) {
    elemento.closest('.card-list-item').remove();
    let elementoNumeroConexiones = document.querySelector('#connectionRequestNumber');
    let numeroConexiones = elementoNumeroConexiones.innerText;
    numeroConexiones--;
    elementoNumeroConexiones.innerText = numeroConexiones;
    if (opcion === 'aceptar') {
        let elementoTotalConexiones = document.querySelector('#totalConnections').innerText;
        elementoTotalConexiones++;
        totalConnections.innerText = elementoTotalConexiones;
    }
}