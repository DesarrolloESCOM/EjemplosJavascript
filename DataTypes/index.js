/*
Tipos de datos en Javascript
*/

/*Node -> V8 Google Chrome*/
console.log(">>>>>>>>>>>>>>>>>>>>>>");
var saludo = ["Hola Mundo", "Azu y Toño!"];
console.log(saludo);
saludo = 277777;
console.log(saludo);
console.log("1" + 2);
console.log(">>>>>>>>>>>>>>>>>>>>>>");
// Cosas que no se deben hacer
console.log("1" == 1); // JAVA, X___X, true (?)
console.log(undefined == false); // OK
console.log("" == false); // true, dafuq?
// Things to be done!
console.log("1" === 1); // yay!
console.log(undefined === false); // ??
console.log("" === false); // ??
console.log(">>>>>>>>>>>>>>>>>>>>>>");
//
console.log("Hola,".concat("Mundo"));
console.log("hola     ".trim());
console.log("Hola Toño".replace("Toño","Azu"));
// 
var indefinida; //undefined
if(!indefinida) {
	console.log("La variable no tiene un valor");
} else {
	console.log("La variable tiene un valor :( ");
}
var numero = 10;
if(numero) {
	console.log("tiene un valor numerico!");
}
var listaVacia = [];
if(listaVacia.length) {
	console.log("La lista no esta vacia!");
}

var objeto = {}; //[], {}, Number, "", function
//console.log(typeof objeto);
objeto['llave'] = "valor";
console.log(objeto);
objeto['llave2'] = {'OtroValor': 'miOtroValor'};
console.log(objeto);
// listas
console.log([1,2,4,5,3,1,-3].sort());
console.log([1,2] + [2,2]);