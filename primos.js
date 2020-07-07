function imprimirPrimos(n) { 

if(n < 0) {
	console.log("Cantidad de números ingresada incorrecta: " + n);
}

var contador = 0;
var currentNumber = 0;


while (contador < n) {
	if (esPrimo(currentNumber)) {
		console.log(currentNumber);
		contador++;
	}

currentNumber++;
}
}

function esPrimo(numero) {

	if (numero == 0 || numero == 1) return false;

	for(var i = 2; i < numero /2; i++) {
		if(numero % i == 0) return false;
	}

	return true;
}


// METODO PRINCIPAL
// ARGUMENTO 1: CANTIDAD DE NUMEROS PRIMOS A MOSTRAR

imprimirPrimos(10);