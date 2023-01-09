//FUNCION PARA CREACION DE USUARIO.

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

function usuario(){ 
if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
}else{
    alert("Aunque no hayas ingresado lo solicitado, eres bienvenido a la Experiencia LifeGame!")
    };
    console.log("El usuario de la pagina es " + nombre + " " + apellido );
}

usuario();

//FUNCION PARA VALIDAR EDAD DE LA PERSONA QUE INGRESE A LA PAGINA.

function validarEdad() {
    let edad = parseInt(prompt("Introducir tu edad"));
    while((isNaN(edad)) || (edad < 18 ) ) {
        alert("Debes de agregar una edad valida para poder ingresar a LifeGame.");
    edad = parseInt(prompt("Ingrese otra edad"));
    }
    alert("Tu edad es " + edad + " años, Bienvenido " + nombre + " " + apellido + " a LifeGame !");
    console.log("La edad del usuario es de " + edad + " años.");
};

validarEdad();

//FUNCION CON OPCIONES PARA QUE EL USUARIO PUEDA ELEGIR QUE QUIERE REALIZAR

let marcarOpcion = true;
while(marcarOpcion) {

let mensajeOpciones = "Bienvenida al selector de opciones de LifeGame, a continuacion tendras varias opciones para poder disfrutar de nuestro contenido."

    mensajeOpciones += "\n 1) Propuesta para agregar nuevo juego para la pagina.";
    mensajeOpciones += "\n 2) Propuesta para dar de baja la venta de un juego.";
    mensajeOpciones += "\n 3) Calcular monto de juego con descuento elegido.";
    mensajeOpciones += "\n 4) Entrar a LifeGame.";

let respuestaOpciones = prompt(mensajeOpciones);

    switch (respuestaOpciones) {
        case "1" :
            agregarJuego();
        break;
        case "2" :
            quitarJuego();
        break;
        case "3" :
            montoFinal();
        break;
        case "4" :
            alert("Gracias por visitar LifeGame!");
            marcarOpcion=false;
            break;
        case "null" :
            alert("Gracias por visitar LifeGame!");
            marcarOpcion=false;
            break;
        default :
            alert("Usted no ingresó ninguna opcion, por favor seleccionar una opcion.")

    }
} 

//FUNCION PARA AGREGAR JUEGO

function agregarJuego() { 

let nombreJuego = prompt("Ingrese nombre del juego.");
let preciojuego = parseInt(prompt("Ingrese valor del juego."));

if((nombreJuego !="") && (!isNaN(preciojuego))){
    alert("El nombre y el precio recomendados, fueron ingresados con exito, gracias por colaborar para que LifeGame.");
}else{
    alert("Error: Ingresar nombre y precio");
}

console.log("El juego que ingresaste es " + nombreJuego + " y el precio del juego es " + preciojuego);


};

//FUNCION PARA QUITAR JUEGO

function quitarJuego() {

let quitarJuego = prompt("Ingrese el nombre del juego que propone quitar de la venta.");
let descripcionJuego = prompt("Describe el motivo por el cual quieres que quitemos ( " + quitarJuego + " ) de LifeGame.");

if(quitarJuego ==""){
    alert("Debes agregar el nombre del juego que quieres que quitemos.");
} else if(descripcionJuego ==""){
    alert("Explicanos el motivo por el cual quieres que quitemos el titulo.");
} else{
    alert("Esperamos poder satisfacer tus peticiones para que sigas eligiendo LifeGame!");
}

console.log("El juego que quieres sacar es " + quitarJuego + " y la descripcion es " + descripcionJuego);

};

//FUNCION PARA CALCULAR DESCUENTO DE JUEGO

function montoFinal() {

let montoArticulo = parseInt(prompt("Ingrese monto de articulo"));
let elegirDescuento= parseInt(prompt("Ingresar si su decuento debe ser 5, 10 o 15%"));
let montoDescuento = montoArticulo / 100 * elegirDescuento;

switch(elegirDescuento) {
    case 5 :
        alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
        break;
    case 10 :
        alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
        break;
    case 15 :
        alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
        break;
    case "null":
       alert("No ingresaste ningun descuento valido.")
    default:
        alert("No existe dicho monto de descuento") ;         
}; 

console.log("El costo del articulo con el descuento solicitado es de " + montoDescuento + " pesos.")

}


