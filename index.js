let peso = prompt("introduzca su peso");

let altura = prompt ("introduzca su altura");


let indice = peso / (altura **2 );

alert("Tu IMC es " + indice)

if (indice >=30) {
    alert("Faa estas re godo amigo");
}

if (indice <=29) {
    alert("Estas en peso y forma OPTIMA amigo")
}