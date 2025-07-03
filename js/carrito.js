let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}

function agregarAlCarrito(id) {
  const productos = JSON.parse(localStorage.getItem("todosLosProductos")) || [];
  const producto = productos.find(p => p.id === id);
  const item = carrito.find(p => p.id === id);

  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  alert(`Agregaste "${producto.title}" al carrito`);
}

function eliminarDelCarrito(id) {
  const index = carrito.findIndex(p => p.id === id);
  if (index !== -1) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad -= 1;
    } else {
      carrito.splice(index, 1);
    }
  }

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
    total += p.price * p.cantidad;
    contenedor.innerHTML += `
      <div style="display:flex; gap:15px; align-items:center; margin:10px 0; border:1px solid #ddd; padding:10px; border-radius:10px;">
        <img src="${p.thumbnail}" width="80" height="80" style="object-fit:cover; border-radius:10px;" />
        <div>
          <p><strong>${p.title}</strong></p>
          <p>$${p.price} x ${p.cantidad}</p>
          <button onclick="eliminarDelCarrito(${p.id})" style="background-color:#cc0000; color:white; border:none; padding:5px 10px; border-radius:5px;">Eliminar</button>
        </div>
      </div>
    `;
  });

    totalContenedor.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
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

function actualizarContador() {
  const contador = document.getElementById("contador");
  if (contador) {
    const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    contador.textContent = totalItems;
  }
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarContador();
});
