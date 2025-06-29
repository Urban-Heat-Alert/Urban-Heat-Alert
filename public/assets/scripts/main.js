function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;


    if (user && pass) {
        alert(`Bienvenido, ${user}`);
    } else {
        alert('Por favor, completa todos los campos');
    }
}

function register() {
    const fullName = document.getElementById('full-name').value;
    const user = document.getElementById('register-username').value;
    const pass = document.getElementById('register-password').value;
    const confirmPass = document.getElementById('confirm-password').value;

    if (fullName && user && pass && confirmPass) {
        if (pass === confirmPass) {
            alert(`Registro exitoso para: ${fullName}`);
            showLogin();
        } else {
            alert('Las contraseñas no coinciden');
        }
    } else {
        alert('Por favor, completa todos los campos');
    }
}

function sendCode(method) {
    const message = document.getElementById('message');
    if (method === 'sms') {
        message.innerText = 'Código enviado por SMS';
    } else {
        message.innerText = 'Código enviado por Email';
    }
}

function showForgotPassword() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('forgot-password-section').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('forgot-password-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}
function socialLogin(platform) {
    alert(`Iniciando sesión con ${platform}`);
}