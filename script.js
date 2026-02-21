let productos = [];

function login() {
    document.getElementById("login-view").classList.add("hidden");
    document.getElementById("app-view").classList.remove("hidden");
}

function logout() {
    document.getElementById("app-view").classList.add("hidden");
    document.getElementById("login-view").classList.remove("hidden");
}

function mostrar(id) {
    document.querySelectorAll(".vista").forEach(v => v.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function entrada() {
    let nombre = document.getElementById("productoEntrada").value;
    let cantidad = parseInt(document.getElementById("cantidadEntrada").value);

    if (!nombre || !cantidad) return;

    let producto = productos.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad += cantidad;
    } else {
        productos.push({ nombre, cantidad });
    }

    actualizarTabla();
}

function salida() {
    let nombre = document.getElementById("productoSalida").value;
    let cantidad = parseInt(document.getElementById("cantidadSalida").value);

    let producto = productos.find(p => p.nombre === nombre);

    if (producto && producto.cantidad >= cantidad) {
        producto.cantidad -= cantidad;
        actualizarTabla();
    } else {
        alert("Stock insuficiente");
    }
}

function actualizarTabla() {
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";

    let bajoStock = 0;

    productos.forEach(p => {
        if (p.cantidad <= 5) bajoStock++;

        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.cantidad}</td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = productos.length;
    document.getElementById("bajoStock").innerText = bajoStock;
}