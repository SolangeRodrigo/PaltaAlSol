
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}

function agregarAlCarrito(id) {
  const productos = JSON.parse(localStorage.getItem("todosLosProductos")) || [];
  const producto = productos.find(p => p.id === id);

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const item = carrito.find(p => p.id === id);

  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador(); // <-- Actualiza el contador visual
  alert(`Agregaste "${producto.title}" al carrito`);
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
});
function eliminarDelCarrito(id) {
  const item = carrito.find(p => p.id === id);

  if (!item) return;

  if (item.cantidad > 1) {
    item.cantidad -= 1;
  } else {
    carrito = carrito.filter(p => p.id !== id);
  }

  guardarCarrito();
  mostrarCarrito();
}


  guardarCarrito();
  mostrarCarrito();
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("¡Gracias por tu compra!");
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-contenido");
  const totalContenedor = document.getElementById("total");

  if (!contenedor) return;

  contenedor.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    totalContenedor.innerHTML = "";
    return;
  }

carrito.forEach(p => {
  total += p.precio * p.cantidad;
  contenedor.innerHTML += `
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px; border-radius: 10px; display: flex; align-items: center; gap: 15px;">
      <img src="${p.imagen}" alt="${p.nombre}" width="80" height="80" style="object-fit: contain;" />
      <div>
        <p><strong>${p.nombre}</strong></p>
        <p>$${p.precio} x ${p.cantidad}</p>
        <button onclick="eliminarDelCarrito(${p.id})" style="background-color: #ff3333; color: white; border: none; padding: 5px 10px; border-radius: 5px;">Eliminar</button>
      </div>
    </div>
  `;
});

  totalContenedor.innerHTML = `<h3>Total: $${total}</h3>`;
}

function actualizarContador() {
  const contador = document.getElementById("contador");
  if (contador) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    contador.textContent = totalItems;
  }
}

// Ejecutar en ambas páginas
document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarContador();
});
