var frase = jQuery(".frase").text();
var tamanhoFrase = frase.split(" ").length;
var numPalavras = $('.numPalavras');

numPalavras.text(tamanhoFrase);