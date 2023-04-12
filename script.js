function addToCart(producto, precio) {
    // Buscar la tabla y la fila correspondiente al producto
    var table = document.getElementById("cart");
    var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var row = null;
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName("td")[0].innerHTML === producto) {
            row = rows[i];
            break;
        }
    }

    // Si la fila ya existe, aumentar la cantidad y actualizar el total
    if (row !== null) {
        var cantidad = parseInt(row.getElementsByTagName("td")[1].innerHTML) + 1;
        row.getElementsByTagName("td")[1].innerHTML = cantidad;
        var total = cantidad * precio;
        row.getElementsByTagName("td")[3].innerHTML = "$" + total.toFixed(2);
    } else {
        // Si la fila no existe, crearla y agregarla a la tabla
        var row = document.createElement("tr");
        var productName = document.createElement("td");
        productName.innerHTML = producto;
        var cantidad = document.createElement("td");
        cantidad.innerHTML = 1;
        var precioUnitario = document.createElement("td");
        precioUnitario.innerHTML = "$" + precio.toFixed(2);
        var total = document.createElement("td");
        total.innerHTML = "$" + precio.toFixed(2);
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Eliminar";
        removeButton.onclick = function () { removeFromCart(producto, precio); };
        var removeCell = document.createElement("td");
        removeCell.appendChild(removeButton);
        row.appendChild(productName);
        row.appendChild(cantidad);
        row.appendChild(precioUnitario);
        row.appendChild(total);
        row.appendChild(removeCell);
        table.getElementsByTagName("tbody")[0].appendChild(row);
    }

    // Actualizar el total de la tabla
    var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var total = 0;
    for (var i = 0; i < rows.length; i++) {
        total += parseFloat(rows[i].getElementsByTagName("td")[3].innerHTML.slice(1));
    }
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
function removeFromCart(producto, precio) {
    // Buscar la tabla y la fila correspondiente al producto
    var table = document.getElementById("cart");
    var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var row = null;
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName("td")[0].innerHTML === producto) {
            row = rows[i];
            break;
        }
    }

    // Si la fila existe, eliminarla de la tabla
    if (row !== null) {
        table.getElementsByTagName("tbody")[0].removeChild(row);
    }

    // Actualizar el total de la tabla
    var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var total = 0;
    for (var i = 0; i < rows.length; i++) {
        var price = parseFloat(rows[i].getElementsByTagName("td")[2].innerHTML.slice(1));
        var quantity = parseInt(rows[i].getElementsByTagName("td")[1].innerHTML);
        total += price * quantity;
    }

    // Actualizar el total en la tabla
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}