<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Carrito | Palta al Sol🥑</title>
  <link rel="icon" type="image/png" href="logos/logo.super.transparente.png" />
  <link rel="stylesheet" href="css/estilos.css" />
</head>
<body>
  <header>
    <img src="logos/logo.super.png" alt="Logo de la tienda" width="230" />
    <h1>Tu carrito de compras</h1>
    <a href="productos.html" style="display:inline-block; margin:10px 0; padding:10px 20px; background-color:#1f4620; color:white; text-decoration:none; border-radius:10px;">← Volver a productos</a>
  </header>

  <main>
    <section id="carrito-contenido"></section>
    <div id="total" style="margin-top: 20px;"></div>
    <button onclick="finalizarCompra()" style="margin-top: 20px; padding:10px 20px; background-color:#1f4620; color:white; border:none; border-radius:8px;">Finalizar compra</button>
  </main>

  <footer style="background-color: #f4f4f4; padding: 30px 20px; text-align: center;">
    <a style="font-size: 18px; margin-bottom: 20px;">
      &copy; 2025 Solange Abigail Rodrigo - Supermercado
    </a>
    <div style="display: flex; justify-content: center; gap: 30px;">
      <a href="https://facebook.com" target="_blank" style="color: #3b5998; font-size: 36px;">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" style="color: #e1306c; font-size: 36px;">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </footer>

  <!-- Solo cargamos el JS externo -->
  <script src="js/carrito.js"></script>
</body>
</html>
