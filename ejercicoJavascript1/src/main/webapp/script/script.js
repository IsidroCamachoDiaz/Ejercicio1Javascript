//En esta archivo se hace las funciones para la pagina web
//Se pone el mensaje donde quiera que enseñe en la pestaña con la funcion console.log
let aviso = "Hola Mundo!";
//alert es una funcion para que salga una ventana emergente 
alert(aviso);
alert("Soy el primer Script");
//Incremento la variable
aviso+="Soy el primer Script";

let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for (let i = 0; i < meses.length; i++) {
	console.log(meses[i]);
}

let valores = [true, 5, false, "hola", "adios", 2];

if(valores[3].length>valores[4])
	console.log("hola es mas largo")
	
if(valores[3].length<valores[4])
	console.log("adios es mas largo")

let valortrue = valores[0]||valores[2];
let valorfalse = valores[0]&&valores[2];
console.log(valortrue);
console.log(valorfalse);

let suma = valores[1]+valores[5];
let resta = valores[1]-valores[5];
let multiplicacion = valores[1]*valores[5];
let division = valores[1]/valores[5];
let resto = valores[1]%valores[5];
console.log(suma+" "+resta+" "+multiplicacion+" "+division+" "+resto);

let numero = valores[1];
numero+=valores[1];
numero-=valores[1];
console.log(numero);
let exponente = valores[5]**valores[1];
console.log(exponente);

var numero1 = 5;
var numero2 = 8;

if(numero1<numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero>0) {
console.log("numero2 es positivo");
}
if(numero1!=0||numero1<0) {
console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1<=numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

function factorial(){
	let numero=Number(prompt("Introduzca un numero"));
	let resultado=1;
	
	for(let e=2;e<=numero;e++){
		resultado *= e;
	}
	document.write(resultado);
}

function par(){
	let numero=Number(prompt("Introduzca un numero"));

	if(numero%2==0)
	alert("El numero es par "+numero);
	else
		alert("El numero no es par "+numero);
		document.write
}

function mayusculas(){
	let texto=prompt("Introduzca algo");
	
	//las funciones tolowecase y touppercase convierten el texto completo en mayuscula y minuscula los compramos entero para ver si
	//esta compuesto por solo mayusculas o minusculas si no sera una mezcla de ambas
	if(texto==texto.toUpperCase())
		alert("El texto solo contiene mayusculas")
	if(texto==texto.toLowerCase())
		alert("El texto solo contiene minusculas")
	else if(texto!=texto.toLowerCase()&& texto!=texto.toUpperCase())
		alert("El texto contiene mayusculas y minusculas")

}