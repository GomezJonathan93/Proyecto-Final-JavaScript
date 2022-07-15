//Mi proyecto va a estar enfocado en darle funcionalidad a una pagina web de eloboost y merch de League Of Legends. Por lo tanto, usaré eso como "inspiración" para el código. En este caso, trabajo el proceso de compra de la parte de merch, declarando los tres productos que estarán disponibles.

// do{
//     producto = prompt("¿Qué producto desea comprar?" +"\nAlmohadones ($1000)\nRemeras ($2000)\nFiguras ($500)")
//     cantidad = parseInt(prompt("¿Cuántas unidades desea?"))

//     let precio;

//     switch (producto) {
//     case "Remeras":
//         precio = 2000;
//         break;
//     case "Almohadones":
//         precio = 1000;
//         break;
//     case "Figuras":
//         precio = 500;
//         break;
//     default:
//         alert("Tiene que elegir uno de esos productos")
//         precio= 0;
//     break;
//     }

//     total += precio * cantidad;

//     seguirComprando = confirm("¿Desea comprar otro producto?");
// } while (seguirComprando)

// alert("El total de su compra es: " + total);

// if(total > 5000){
//     alert("Debido al monto de su compra, se le aplicó un 10% de descuento. Su nuevo total es: " + total * 0.9);
// } else{
//     alert("Muchas gracias por su compra! Procure pagar en efectivo (Si usted trabaja en la AFIP, esto es una broma) *guiño guiño*")
// };

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
            precio = 2000;
            break;
        case "Almohadones":
            precio = 1000;
            break;
        case "Figuras":
            precio = 500;
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