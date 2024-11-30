document.addEventListener('DOMContentLoaded', function () {
  const pagarBtn = document.getElementById('pagarBtn');
  const mensajePago = document.getElementById('mensajePago');

  // Verificar si los elementos están en el DOM
  if (!pagarBtn || !mensajePago) {
    console.error('Elemento(s) faltante(s) en el DOM: pagarBtn o mensajePago.');
    return;
  }

  // Función para obtener los productos del carrito
  function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('productosCarrito')) || [];
  }

  // Función para guardar el carrito en el localStorage
  function guardarCarrito(productos) {
    localStorage.setItem('productosCarrito', JSON.stringify(productos));
  }

  // Función para calcular los totales
  function calcularTotales(productos) {
    const subtotal = productos.reduce((total, p) => total + p.precio * p.cantidad, 0);
    const impuesto = subtotal * 0.15; // 15% de impuesto
    const total = subtotal + impuesto;
    return { subtotal, impuesto, total };
  }

  // Función para renderizar los productos en el carrito
  function renderizarCarrito() {
    const productos = obtenerCarrito();
    const { subtotal, impuesto, total } = calcularTotales(productos);

    // Mostrar los productos con botón de eliminar
    const productosHTML = productos.map((producto, index) => `
      <div class="producto">
        <p><strong>Producto:</strong> ${producto.nombre}</p>
        <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
        <p><strong>Precio:</strong> L ${producto.precio}</p>
        <button class="eliminarBtn" data-index="${index}">Eliminar</button>
      </div>
    `).join('');

    document.querySelector('.productos').innerHTML = productosHTML;

    // Actualizar los totales
    document.querySelector('#subtotal').textContent = `L ${subtotal.toFixed(2)}`;
    document.querySelector('#impuesto').textContent = `L ${impuesto.toFixed(2)}`;
    document.querySelector('#total').textContent = `L ${total.toFixed(2)}`;
    
    // Agregar el evento de eliminar a los botones
    document.querySelectorAll('.eliminarBtn').forEach(btn => {
      btn.addEventListener('click', function() {
        const index = btn.getAttribute('data-index');
        eliminarProducto(index);
      });
    });
  }

  // Función para eliminar un producto
  function eliminarProducto(index) {
    const productos = obtenerCarrito();
    productos.splice(index, 1); // Eliminar el producto en el índice especificado
    guardarCarrito(productos);
    renderizarCarrito(); // Volver a renderizar el carrito con los productos restantes
  }

  // Función para mostrar el mensaje de pago realizado
  function mostrarMensajePago() {
    const productos = obtenerCarrito();
    if (productos.length > 0) {
      mensajePago.style.display = 'block';

      setTimeout(function () {
        mensajePago.style.display = 'none'; // Ocultar el mensaje después de 3 segundos
      }, 3000);

      // Limpiar el carrito
      localStorage.removeItem('productosCarrito');

      // Limpiar los valores de subtotal, impuesto y total
      document.querySelector('#subtotal').textContent = 'L 0.00';
      document.querySelector('#impuesto').textContent = 'L 0.00';
      document.querySelector('#total').textContent = 'L 0.00';

      // Renderizar el carrito vacío
      renderizarCarrito();
    } else {
      alert("No hay productos en el carrito.");
    }
  }

  // Evento para el botón de pago
  pagarBtn.addEventListener('click', mostrarMensajePago);

  // Llamar a la función al cargar la página para mostrar el estado actual del carrito
  window.onload = renderizarCarrito;
});
