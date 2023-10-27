//LOCAL DE HARDWARES
//En un nuevo local de computacion, entra el primer cargamento de mercaderia, se desea saber el stock total, el precio y la cantidad de cada producto que ingreso, luego se desea guardar en el deposito 4 de cada uno y dejar el resto a la venta
// y luego crear un mini-sistema que permita saber el nuevo precio de los productos en el 50% de oferta por apertura que va a haber el fin de semana

class stockVenta{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    guardadoDeMercaderia (){
        this.cantidad -= 4
    }
    colocadoMercaderiaEnVenta (){
        this.cantidad -= 6
    }
}

const gabinete = new stockVenta ("gabinetes Aorus", 70000, 10);
const mouse1 = new stockVenta ("mouse razer", 30000, 10);
const mouse2 = new stockVenta ("mouse logitech", 20000, 10);
const pad1 = new stockVenta ("Pads logitech", 10000, 10);
const pad2 = new stockVenta ("Pads Red Dragon", 8000, 10);
const auriculares1 = new stockVenta ("Auriculares HyperX", 95000, 10);
const auriculares2 = new stockVenta ("Auriculares Noganet", 30000, 10);

class stockDeposito{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const mercaderiaDeposito = [];

function guardarMercaderia (){
    mercaderiaDeposito.push(new stockDeposito("gabinetes Aorus", 70000, 4));
    mercaderiaDeposito.push(new stockDeposito ("mouse razer", 30000, 4));
    mercaderiaDeposito.push(new stockDeposito ("mouse logitech", 20000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Pads logitech", 10000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Pads Red Dragon", 8000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Auriculares HyperX", 95000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Auriculares Noganet", 30000, 4));
    gabinete.guardadoDeMercaderia();
    mouse1.guardadoDeMercaderia();
    mouse2.guardadoDeMercaderia();
    pad1.guardadoDeMercaderia();
    pad2.guardadoDeMercaderia();
    auriculares1.guardadoDeMercaderia();
    auriculares2.guardadoDeMercaderia();
}

guardarMercaderia();

const mercaderiaVenta = [];

function ponerMercaderiaEnVenta (){
    mercaderiaVenta.push(new stockVenta("gabinetes Aorus", 70000, 6));
    mercaderiaVenta.push(new stockVenta ("mouse razer", 30000, 6));
    mercaderiaVenta.push(new stockVenta ("mouse logitech", 20000, 6));
    mercaderiaVenta.push(new stockVenta ("Pads logitech", 10000, 6));
    mercaderiaVenta.push(new stockVenta ("Pads Red Dragon", 8000, 6));
    mercaderiaVenta.push(new stockVenta ("Auriculares HyperX", 95000, 6));
    mercaderiaVenta.push(new stockVenta ("Auriculares Noganet", 30000, 6));
    gabinete.colocadoMercaderiaEnVenta();
    mouse1.colocadoMercaderiaEnVenta();
    mouse2.colocadoMercaderiaEnVenta();
    pad1.colocadoMercaderiaEnVenta();
    pad2.colocadoMercaderiaEnVenta();
    auriculares1.colocadoMercaderiaEnVenta();
    auriculares2.colocadoMercaderiaEnVenta();
}

ponerMercaderiaEnVenta();

document.write("<b>MERCADERIA EN VENTA</b> <br><br>");

mercaderiaVenta.forEach (productos1 => {
    document.write("<b>Nombre:</b> " + productos1["nombre"] + "<br>");
    document.write("<b>Precio: </b>" + productos1["precio"] + "<br>");
    document.write("<b>Cantidad:</b>" + productos1["cantidad"] + "<br><br>");
})

document.write("<b>MERCADERIA EN DEPOSITO</b> <br><br>")

mercaderiaDeposito.forEach (productos2 => {
    document.write("<b>Nombre:</b> " + productos2["nombre"] + "<br>");
    document.write("<b>Precio: </b>" + productos2["precio"] + "<br>");
    document.write("<b>Cantidad:</b>" + productos2["cantidad"] + "<br><br>");
})


// venta (){
    // if(this.cantidad == 0){
    //     console.log("No queda stock en deposito")

    //     }
    // else{
    //     console.log("Producto Vendido Con Exito!");
    //     this.cantidad -= 1
    //     }
    // }






















