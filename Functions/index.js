// funciones!! >__<
//function miFuncion () {
//	//console.log("hola mundo!");
//	throw new Error("X__X El mundo murió!");
//}


// Things to be done! and consider!!!
//(function otraFuncion() {
//	console.log("Adios mundo cruel X__X");
//	throw new Error("No lo haga compa!");
//})();
//miFuncion();
// callbacks
var funcionConCallback = function (valor, error, success) {
	if(valor) {
		console.log("Tiene un valor")
		success("yay! me quieres :3");
	} else {
		error("Error");
	}
}

var funcionError = function (message) {
	console.error("El error es " + message);
}

var funcionSuccess = function (message) {
	console.error("El success es " + message);
}

funcionConCallback(12, function error() { 
	console.log("desde funcion anonima");
}, function success (message) {
	console.log("mensaje : > "+ message);
});