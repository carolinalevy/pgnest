
async function validateLogin(e) {
    let user = {
      nombre: document.getElementById('formUser').value,
      password: document.getElementById('formPassword').value,
    };
  
    let respuesta = await fetch('/login/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  
    if (await respuesta.json()) {
      window.sessionStorage.setItem('userLogged', true);
      window.sessionStorage.setItem('user', user.nombre);
      window.location.href = 'http://localhost:3000/paginaUsuario.html';
    }
    else {
      document.getElementById('formUser').focus();
      document.getElementById('login-button').setAttribute('data-toggle', 'modal');
      document.getElementById('login-button').setAttribute('data-target', '#myModal');
    }
  }
  
  document.getElementById('login-button').addEventListener('click', validateLogin);