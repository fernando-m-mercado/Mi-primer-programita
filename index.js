let peso = prompt("introduzca su peso en Kg");

let altura = prompt ("introduzca su altura en metros (Ej: 1.75)");


let indice = peso / (altura **2 );

alert("Tu IMC es " + indice)

if (indice >=30) {
    alert("Faa estas re godo amigo");
}

if (indice <=29) {
    alert("Estas en peso y forma OPTIMA amigo")
}