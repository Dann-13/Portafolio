

let btnenviar = document.getElementById('enviar');
const validacion = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    if (nombre.value === ""){
        alert('Por favor, escribe tu nombre de usuario.')
        nombre.focus();
        return false;
    }
    if(email.value === ""){
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
    }
    if (!emailVálido(email.value)) {
        alert("Por favor, escribe un correo electrónico válido");
        emailAddress.focus();
        return false;
    }
    if (asunto.value === ""){
        alert('Por favor, escribe el asunto.')
        nombre.focus();
        return false;
    }
    return true;
}
const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
btnenviar.addEventListener('click', validacion);