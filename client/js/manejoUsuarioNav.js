function getNombreUsuarioLoggeado() {
    let userName = window.sessionStorage.getItem('user');
    if(userName) {
        let nameToDisplay = userName.substring(0, userName.indexOf("@"));
        return nameToDisplay;
    }
    return null;
}

function mostrarNav(usuario) {
    if(usuario == null){
        return 
    }
    document.getElementById("userNameNavLink").innerHTML = usuario;
}

let usuario = getNombreUsuarioLoggeado();
mostrarNav(usuario);
