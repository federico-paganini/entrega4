document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("isLoggedIn")) {
        const usuario = document.getElementById("usuario");
        usuario.remove();
    }
    let email = localStorage.getItem("email");
    let li_nav = document.getElementById("usuario");

    li_nav.classList.add("nav-item");
    li_nav.classList.add("dropdown");
    li_nav.innerHTML = `
        <span class ="nav-link" role="button" data-bs-toggle="dropdown" 
        aria-expanded="false">${email}
        <i class="bi bi-caret-up" style="display: none;"></i>
        <i class="bi bi-caret-down"></i>
        </span>
    `;

    //Aquí comienza el código para crear el menu desplegable del usuario
    let MenuDesplegable = document.createElement("ul");
    MenuDesplegable.classList.add("dropdown-menu");

    MenuDesplegable.innerHTML = ` 
    <li>
        <a class="dropdown-item" href="my-profile.html">
            <i class="bi bi-person"></i> 
            Mi perfil
        </a>
    </li>
    <li>
        <a class="dropdown-item" href="cart.html">
            <i class="bi bi-cart"></i> 
            Mi carrito
        </a>
    </li>
    <li><hr class="dropdown-divider"></li>
    <li>
    <div class="dropdown-item">
        <span> Modo Claro / Modo Oscuro </span>
        <div class="contain text-center">
            <label class="toggleswitch">
                <input type="checkbox" name="switch" id="modeswitch">
                <span>
                    <i class="bi bi-brightness-high-fill off"></i>
                    <i class="bi bi-moon-stars-fill on"></i>
                </span>
            </label>
        </div>
    </div>
    </li>
    <li><hr class="dropdown-divider"></li>
    <li>
        <a class="dropdown-item" href="login.html">
            <i class="bi bi-door-closed"></i> 
            Cerrar sesión
        </a>
    </li>
    `;

    li_nav.appendChild(MenuDesplegable);
});
