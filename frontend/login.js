console.log("login.js cargado");

const usuario = "admin";
const contraseña = "1234";

function validarLogin() {
    let user = document.getElementById("inpuText").value;
    let pass = document.getElementById("contraseña").value;
    let mensaje = document.getElementById("mensaje");

    if (user === usuario && pass === contraseña) {
        mensaje.style.color = "green";
        mensaje.innerText = "Inicio de sesión exitoso";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 200);
    } else {
        mensaje.style.color = "red";
        mensaje.innerText = "Usuario o contraseña incorrectos";
    }
}
