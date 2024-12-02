window.onload = function() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (carrito.length === 0) {
      document.getElementById('productos-lista').innerHTML = '<p>No has agregado productos al carrito.</p>';
      return;
  }

  function actualizarFactura() {
      let subtotal = 0;
      let productosHTML = '';

      carrito.forEach((producto, index) => {
          productosHTML += `
              <div class="producto">
                  <p>${producto.nombre} -  ${producto.precio}</p>
                  <button class="eliminar-btn" data-index="${index}">Eliminar</button>
              </div>
          `;
          subtotal += parseFloat(producto.precio.replace('Lps.', '').trim());
      });

      document.getElementById('productos-lista').innerHTML = productosHTML;

      let impuesto = subtotal * 0.15;

      let total = subtotal + impuesto;

      document.getElementById('subtotal').textContent = `L ${subtotal.toFixed(2)}`;
      document.getElementById('impuesto').textContent = `L ${impuesto.toFixed(2)}`;
      document.getElementById('total').textContent = `L ${total.toFixed(2)}`;
  }

  actualizarFactura();

  document.getElementById('productos-lista').addEventListener('click', function(event) {
      if (event.target && event.target.classList.contains('eliminar-btn')) {
          let index = event.target.getAttribute('data-index');

          carrito.splice(index, 1);

          localStorage.setItem('carrito', JSON.stringify(carrito));

          actualizarFactura();
      }
  });

  document.getElementById('pagarBtn').addEventListener('click', function() {
      localStorage.removeItem('carrito');

      document.getElementById('productos-lista').innerHTML = '<p>No has agregado productos al carrito.</p>';
      document.getElementById('subtotal').textContent = 'L 0.00';
      document.getElementById('impuesto').textContent = 'L 0.00';
      document.getElementById('total').textContent = 'L 0.00';

      document.getElementById('mensajePago').style.display = 'block'; 

      setTimeout(function() {
          document.getElementById('mensajePago').style.display = 'none'; 

          window.location.reload(); 
      }, 3000);
  });
};
