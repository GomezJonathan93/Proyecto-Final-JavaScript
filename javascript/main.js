//Mi proyecto va a estar enfocado en darle funcionalidad a una pagina web de eloboost y merch de League Of Legends. Por lo tanto, usaré eso como "inspiración" para el código. En este caso, trabajo el proceso de compra de la parte de merch, declarando los tres productos que estarán disponibles.

//AGREGADO DE DESAFIO COMPLEMENTARIO II:
//- VOY A DECLARAR EL CONSTRUCTOR DE OBJETOS PARA LOS TRES TIPOS DE PRODUCTOS QUE SE OFRECEN (REMERAS-ALMOHADONES-FIGURAS)
//- VOY A AGREGAR DICHOS OBJETOS CON "NEW", ALOJANDO CADA UNO EN SU ARRAY CORRESPONDIENTE
//- Reemplazaré los precios por los dinámicos de los array en el switch.

class Almohadon{
    constructor (modelo, tamaño, precio, stock){
    this.modelo = modelo;
    this.tamaño = tamaño;
    this.precio = precio;
    this.stock = stock;
}
}

class Remera{
    constructor (modelo, talle, precio, stock){
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;
    this.stock = stock;
}
}

class Figura{
    constructor (modelo, precio, stock){
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
}
}

const almohadones = [
    almohadonGenerico = new Almohadon ("generico", "medium", 1000, 50),
    yuumiGunAlmohadon = new Almohadon ("YuumiGun", "small", 2500, 0),
    yuumiLibroAlmohadon = new Almohadon ("YuumiLibro", "small", 2000, 150), 
]

yuumiGunAlmohadon.stock = 10; // Aumento a 10 el stock de uno de los almohadones

const remeras = [
    remeraGenerico = new Remera ("generico", "XL", 2000, 50),
    yuumiGun = new Remera ("YuumiGun", "L", 2500, 30),
    yuumiLibro = new Remera ("YuumiLibro", "S", 2000, 150),
    yuumiChibi = new Remera ("YuumiChibi", "XL", 3000, 10),
]

const figuras = [
    figuraGenerico = new Figura ("generico", 500, 50),
    yuumiDirectora = new Figura ("YuumiDirectora", 5000, 5),
    yuumiOlas = new Figura ("YuumiOlas", 800, 80),
]

let producto;
let cantidad;
let total = 0;
let seguirComprando;
let costoEnvio= 600;
let totalConDescuento = 0;

function procesoCompra (){
    do{
        producto = prompt("¿Qué producto desea comprar?" +"\nAlmohadones ($1000)\nRemeras ($2000)\nFiguras ($500)")
        cantidad = parseInt(prompt("¿Cuántas unidades desea?"))
    
        let precio;
    
        switch (producto) {
        case "Remeras":
            precio = remeraGenerico.precio;
            break;
        case "Almohadones":
            precio = almohadonGenerico.precio;
            break;
        case "Figuras":
            precio = figuraGenerico.precio;
            break;
        default:
            alert("Tiene que elegir uno de esos productos")
            precio= 0;
        break;
        }
    
        total += precio * cantidad;
    
        seguirComprando = confirm("¿Desea comprar otro producto?");
    } while (seguirComprando)
    
    alert("El total de su compra es: " + total);
}

procesoCompra();

function procesoDescuento (){
    if(total > 5000){
        totalConDescuento = total * 0.9;
        alert("Debido al monto de su compra, se le aplicó un 10% de descuento. Su nuevo total es: " + totalConDescuento);
    } else{
        alert("Muchas gracias por su compra! Procure pagar en efectivo (Si usted trabaja en la AFIP, esto es una broma) *guiño guiño*")
    };
}

procesoDescuento();

function procesoEnvio (){
    if(totalConDescuento > 6000){
        alert("Debido a que su total a pagar es: " + totalConDescuento +" , usted accede a una bonificiación total del costo de envío." )
    } else{
        totalConDescuento + costoEnvio
        alert("El costo final de la operación, con gastos de envío incluidos es de "+ totalConDescuento +". Llegará a su domicilio en el día de mañana.")
    }
}

procesoEnvio();