var dialog = document.querySelector('Dialog');
var BotonA = document.querySelector('.Burguer');
var BotonC = document.querySelector('.BD');

BotonA.addEventListener("click", Abrir);
BotonC.addEventListener("click", Cerrar);

function Abrir() {
    dialog.showModal();
}

function Cerrar() {
    dialog.close();
}

if ($('Dialog').css('width') == '200px') {
    dialog.close();
} else {
    dialog.showModal();
}

/* const Abrir = document.getElementById('Burguer');
const Cerrar = document.getElementById('Dialog');

Abrir.addEventListener('click', () => Dialog.showModal());
 */

function captura(){
    var nombre=document.getElementById('nombre').value;
    var apellido=document.getElementById('apellido').value;
    var correo=document.getElementById('correo').value;
    var telefono=document.getElementById('telefono').value;
    var comentario=document.getElementById('comentario').value;
    alert("Nombre: " + nombre + ", Apellido: " + apellido + ", Correo: " + correo + ", Telefono: " +telefono + ", Comentario: " +comentario);
}