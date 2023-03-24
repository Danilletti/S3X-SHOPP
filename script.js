// Obtener elementos del DOM
const listaProductos = document.querySelector('#lista-productos');
const listaCarrito = document.querySelector('#lista-carrito');

// Añadir evento de clic a los botones "Agregar al carrito"
listaProductos.addEventListener('click', agregarProducto);

// Definir la función agregarProducto
function agregarProducto(e) {
    if (e.target.classList.contains('boton-agregar')) {
        const producto = e.target.parentElement;
        const productoTitulo = producto.querySelector('span').innerText;
        const productoId = e.target.dataset.id;

        // Comprobar si el producto ya está en el carrito
        const productosEnCarrito = listaCarrito.querySelectorAll('.producto-carrito');
        for (let i = 0; i < productosEnCarrito.length; i++) {
            if (productosEnCarrito[i].dataset.id === productoId) {
                alert('Este producto ya está en el carrito');
                return;
            }
        }

        // Crear elemento para añadir al carrito
        const elementoCarrito = document.createElement('li');
        elementoCarrito.classList.add('producto-carrito');
        elementoCarrito.dataset.id = productoId;
        elementoCarrito.innerHTML = `
            <span>${productoTitulo}</span>
            <button class="boton-quitar" data-id="${productoId}">Quitar del carrito</button>
        `;

        // Añadir elemento al carrito
        listaCarrito.appendChild(elementoCarrito);
    }
}

// Añadir evento de clic a los botones "Quitar del carrito"
listaCarrito.addEventListener('click', quitarProducto);

// Definir la función quitarProducto
function quitarProducto(e) {
    if (e.target.classList.contains('boton-quitar')) {
        const productoId = e.target.dataset.id;
        const productoEnCarrito = listaCarrito.querySelector(`.producto-carrito[data-id="${productoId}"]`);

        // Quitar elemento del carrito
        listaCarrito.removeChild(productoEnCarrito);
    }
}