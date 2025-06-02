// Mostrar el formulario de registro
function showRegisterForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}

// Mostrar el formulario de login
function showLoginForm() {
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
}

// Validación simple de los formularios
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Bienvenido");
    window.location.href = "index.html"; 
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registro exitoso");
});
