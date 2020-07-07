function verificarPalabraPalindromo(palabra){
	var resultado = true;

	var currentWord = palabra.toUpperCase();
	
	var caracteres = currentWord.split("");
	var caracteresInvertidos = currentWord.split("").reverse();

	for(var i = 0; i <  caracteres.length; i++ ) {
		if ( caracteres[i] != caracteresInvertidos[i] ) {
			resultado = false;
			break;
		}
	}

	if(resultado) {
		console.log("SI ES PALINDROMA");
	} else {
		console.log("NO ES PALINDROMA");
	}
}


// METODO PRINCIPAL
//ARGUMENTO 1: PALABRA A VERIFICAR SI ES PALINDROMA

verificarPalabraPalindromo("Reconocer");