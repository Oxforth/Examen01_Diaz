var IGVTOTAL = 0

var Producto = new Object();
Producto.nombre = "";
Producto.cantidad = 0;
Producto.precio = 0.0;

function enviar() {
    var data = document.getElementById("data")
    var tot = document.getElementById("cant").value;
    var prod = document.getElementById("prod").value;

    switch (prod) {
        case "Gorro":
            Producto.nombre = prod;
            Producto.precio = 2;
            Producto.cantidad = 30;
            crear(Producto, data, tot);
            break;

        case "Polo":
            Producto.nombre = prod;
            Producto.precio = 15;
            Producto.cantidad = 20;
            crear(Producto, data, tot);
            break;

        case "Pantalón":
            Producto.nombre = prod;
            Producto.precio = 20;
            Producto.cantidad = 20;
            crear(Producto, data, tot);
            break;
    }
}

function crear(prd, dat, to) {
    if (to >= 1 && to < prd.cantidad) {

        var total = prd.precio * to;
        var igv1 = (total * 18) / 100;

        var fila = "<tr><td>" + prd.nombre +
            "</td><td>" + to +
            "</td><td>" + prd.precio +
            "</td><td>" + total +
            "</td><td>" + igv1 +
            "</td><td><a href='#' onclick='delets(this)'><div id='delet'></div></td></tr>";

        var fil = document.createElement("tr");
        fil.innerHTML = fila;
        dat.appendChild(fil);
        var totales = document.getElementById("totales");
        
        IGVTOTAL = IGVTOTAL + igv1;
        
        limpiar();
        igvs(IGVTOTAL)

    } else {
        alert("No contamos con esa cantidad")
    }
}

function delets(p) {
    var opcion = confirm("¿Está seguro de eliminar?");

    if (opcion == true) {
        var y = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(y);
        alert("Registro eliminado");
    } else {
        alert("El registro no se eliminó")
    }
}

function limpiar() {
    document.getElementById("cant").value = "";
}

function igvs(n) {
    var p = document.getElementById("igv");
    p.innerHTML = "La IGV total es " + n;
}
