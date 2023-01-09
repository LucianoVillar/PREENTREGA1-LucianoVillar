//CLASE 1

//Comentario Simple: Una linea

/* Comentario de mas de una linea I
   Comentario de mas de una linea II */ 

   //Declaracion de variable ES5

   //var nombre = "Luciano";

   //Declaracion de variable ES6

    /*let apellido = "Villar";
    const Nacionalidad  = "Uruguay";*/

// correcto

/*let apodo 
let telefono
const anioNacimiento*/

// incorrecto

/*var año
var telefono movil */

/*EJERCICIOS

//Declaracion
const nombre = "Luciano";
const apellido = "Villar";
let edad = 22 ; //number
let edad2 = "22" //string
//Asignacion
edad = 23;
edad2 = "21";

//OPERACIONES BASICAS
let numeroa = 2;
let numerob = 5;
const numeroc = 4;

//suma 
let resultadosuma = numeroa + numerob;
//resta
let resultadoresta = numerob - numeroa;
//multiplicacion
let resultadoproducto = numerob * numeroc;
//division
let resultadodivision = numeroc / numeroa;

let texto1 = "Coder";
let texto2 = "House";
const BLANCO = "";

//Concatenar texto1 y texto2 ("Coder" y "House" = CoderHouse)
let resultadoA = texto1 + texto2;
//Concatenar texto2 y 1 ("House" + 1 = House1)
let resultadoB = texto2 + 1;
//Concatenar texto1, BLANCO y texto2 ("Coder" + "" + "House")
let resultadoC = texto1 + BLANCO + texto2;

//Para poder ver resultados en la consola:

console.log(resultadoC);
console.log(resultadodivision);
console.log(resultadoB);
console.log(apellido);

console.log("Naci en el 2000, es decir que mi edad es:" + edad + " años");

//PROMPT
const nombreIngresado = prompt("Ingrese su nombre");
const apellidoIngresado = prompt("Ingrese su apellido");
alert("Hola querido " + nombreIngresado + BLANCO + apellidoIngresado + " ,Tenemos nuevos productos!!!");


console.log(nombreIngresado);
console.log(apellidoIngresado);*/

//ejercicio 1

/*let bienvenido = prompt("Ingrese su nombre");

console.log("Bienvenido de nuevo " + bienvenido + ", Todos los de la tienda nos preguntabamos por ti.");
*/
//ejercicio 2
/*
let nombre = prompt("Como te llamas?");
let apellido = prompt("Y como es tu apellido?");
alert("Hola " + nombre + " " + apellido + ", te echabamos de menos, en que te podemos ayudar hoy?");
*/
//ejercicio 3
/*let edad = parseInt(prompt("Ingrese edad"));
alert("Hola estimado cliente, su edad a la fecha es " + edad + " años");
const edadCami = 21;
let diferenciaEdad = edad - edadCami
console.log("La edad de diferencia de nosotros es de " + diferenciaEdad + " años");
*/

//CLASE 2

/*if (true) {
 console.log(" vas a ver este mensaje")
};*/

/*if (false) {
    console.log(" no vas a ver este mensaje ")
};

console.log("este mensaje lo vemos siempre");

const usuario = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
let edad = parseInt(prompt("Ingrese su edad"));

console.log("Bienvenido " + usuario + " estamos encantados de volver a verte.");
console.log( apellido + " en que lo podemos ayudar hoy?");
console.log("Su edad es " + edad);

//EJEMPLO DE CONDICIONALES
let edad = 22;

if (edad == 22){
console.log("Tu edad es 22 años")
};

if (edad == 20){
console.log("Tu edad no es 22 años")
};

let edad = 22;
if (edad == 22){
console.log("Tenes la misma edad que el programador")
}else{
console.log("Tenes una edad distinta a la del programador")
};*/

//EJEMPLO de if ... else

/*let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("El nombre del usuario ingresado es " + nombreUsuario);
}*/

//CONDICIONALES ANIDADAS if ... else if

/*let precio = 100.5;
if (precio < 20) {
alert("El precio es menor que 20");
}
else if (precio < 50) {
alert("El precio es menor que 50");
}
else if (precio < 100) {
alert("El precio es menor que 100");
}
else {
alert("El precio es mayor que 100");
}*/

 //TRUE or FALSE
/*
let numero = parseInt(prompt("Elegir numero"))
let esMayor5 = (numero > 5);//su valor sera true

if (esMayor5) {
alert("Es boolean true")
}
else {
alert("Es boolean false")
};

 //OPERADOR EN JS (&& o AND)

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")) {
alert("Nombre: " + nombreIngresado + " --- Apellido: " + apellidoIngresado);
}else{
alert("Error: Ingresar nombre y apellido");
}*/

 //OPERADOR EN JS ( || o OR)

/*let nombreIngresado = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "Ana")){
    alert("El nombre es Ana");
}else{
    alert("El nombre no es Ana");
}*/

//COMBINACION || (OR) Y && (AND)
/*let nombreIngresado = prompt("Ingresar  nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido");
}*/

//ALGORITMO CREADO POR MI

/*
const  usuario = prompt("Ingrese su usuario");
const apellido = prompt("Ingrese su apellido");

if ((usuario !="") && (apellido !="")){
    alert("Bienvenido querido " + usuario + " " + apellido + " recordarte que esta pagian es exclusiva para mayores de 18 años, ¿Cumples con ese requisito?")
}else{
    alert("Error: Ingresar nombre y apellido");
}

let edad = parseInt(prompt("Ingresar su edad"));

if((edad !="") && ((edad == 18) || (edad >= 18))){
    alert("Excelente, Ahora es hora de disfrutar de nuestros productos");
}else{
    alert("No cumples con la edad minima para poder acceder a esta pagina");
}

console.log("El nombre del Usuario es " + usuario);
console.log("El apellido del Usuario es " + apellido);
console.log("La edad es " + edad);


for(i = 0; i < 8; i = i + 1){
    console.log("Ahora la variable es igual a " + i)
}

console.log("Termino el conteo de variable.")
;
*/

//Ciclo FOR
/*
for(let i = 1; i <= 5; i = i + 1) {

    const nombre = prompt("Introducir nombre");
    let edad = parseInt(prompt("Introducir edad"));

    alert("El Usuario es " + i + " que hace referencia a " + nombre + " que tiene la edad de " + edad + " años" )
}
*/

//CICLO FOR CON BREAK
/*
for(let i = 1; i <= 5; i = i + 1) {

    const nombre = prompt("Introducir nombre");
    let edad = parseInt(prompt("Introducir edad"));

if (edad < 18) {
    alert("Se ingreso una edad menor a 18.")
    break;
}
alert("El Usuario es " + i + " que hace referencia a " + nombre + " que tiene la edad de " + edad + " años" )
};
*/

//CICLO FOR con CONTINUE
/*
for (let i = 1; i <= 5; i = i + 1) {

const nombre = prompt("Nombre");
let edad = parseInt(prompt("Edad"));

if (edad < 18) {
    alert("Tu edad no es valida para la pagina");
    continue;
}
alert("El Usuario es " + i + " que hace referencia a " + nombre + " que tiene la edad de " + edad + " años" )
};

console.log(nombre);

//Me quede en el minuto 35:18

 */
/*
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
} else{
    alert("Introducir nombre/apellido valido")
};

*/
/*
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
} else{
    alert("Introducir nombre/apellido valido")
};

*/

    let marcarOpcion = true;
    while(marcarOpcion) {

    let mensajeOpciones = "Bienvenida al selector de opciones de LifeGame, a continuacion tendras varias opciones para poder disfrutar de nuestro contenido."

        mensajeOpciones += "\n 1) Agregar nuevo juego para la pagina.";
        mensajeOpciones += "\n 2) Propuesta para dar de baja la venta de un juego.";
        mensajeOpciones += "\n 3) Calcular monto de juego con descuento elegido.";
        mensajeOpciones += "\n 4) Salir.";

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
    
    function agregarJuego() { 

    let nombreJuego = prompt("Ingrese nombre del juego.");
    let preciojuego = parseInt(prompt("Ingrese valor del juego."));

    if((nombreJuego !="") && (preciojuego !="")){
        alert("El nombre y el precio recomendados, fueron ingresados con exito, gracias por colaborar para que LifeGame.");
    }else{
        alert("Error: Ingresar nombre y precio");
    }
};

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
    };



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
}


        

