//primer arreglo con la funcion reduce-----------------------------------
const numeros = [1, 2, 3 ]; 

let sumatotal = numeros.reduce(function(acomulador , valoractual) {
    return acomulador + valoractual; 
}, 0);//valor en el que empizae el contador 
console.log("la suma total es:", sumatotal);

//segunda funcion foreach------------------------------------------------
let num = [1,2,3,4,5];

totalsuma = 0;
num.forEach(valoractua1 => {
   totalsuma += valoractua1
});

console.log("la suma es", totalsuma);

//tercera funcion map----------------------------------------------------
//aca utilice el array de let num = [1,2,3,4,5]; del 2
let mapeo = num.map(num1 => {
    return num1 + 2; //num1 valor actual de cada elemento
});

console.log("nuevo arreglo", mapeo);

//cuarta funcion filter--------------------------------------------------

let filtrar = num.filter(num2 => {
    return num2 > 3; //condicion numeros mayores a 3 aparescan
});//num2 valor actual de cada elemento

console.log("arreglo filtrado:",filtrar);

//arreglo numero 2 con reduce-------------------------------------------------------------------------

let colores = ["rojo", "verde", "azul", "amarillo"];

let color = colores.reduce((acomulador_de_cadena,valor_actual) => {
    return acomulador_de_cadena + " " + valor_actual;
}, "");

console.log("cadena concatenada:",color);

//segunda funcion con foreach---------------------------------------------

let nombres = ["tomas", "daniel","mateo"];

nombres.forEach(function(nombre) {
    console.log("buenas " + nombres.join(", "));  
});

//tecera funcion con map--------------------------------------------------
let helados = ["chocolate","vainilla","mora"]


let sabores = helados.map(function(nombre2) {
    return nombre2;
});
console.log("buenas noches " + sabores.join(", ")); 

//cuarta funcion filter---------------------------------------------------
let consolas = ["xbox","play","switch","ds"];

let consolas_con_nombres_largos = consolas.filter(function(elementoactual) {   //elemento actual es como un contador itera sobre cada elemento del array y lo guarda si cumple la condicion
    return elementoactual.length > 3; //filtra los nombres de las consolas que tengan mas de 3 letras por ejemplo el ds no lo lee solo tiene 2 letras 
});
console.log(consolas_con_nombres_largos);

// Arreglo número 3 con reduce---------------------------------------------
let tecnologia = [
    { productos: "iphone", precio: 2000 },
    { productos: "android", precio: 3000 },
    { productos: "pc", precio: 2200 }
];

// Uso de reduce para sumar los precios
let sumaPreciosReduce = tecnologia.reduce((acumulador, prodc) => acumulador + prodc.precio, 0);
console.log(sumaPreciosReduce); // 7200

// Uso de forEach para sumar los precios-----------------------------------
let sumaPreciosForEach = 0;

tecnologia.forEach(prodc => {
    sumaPreciosForEach += prodc.precio;
});

console.log(sumaPreciosForEach); // 7200

// uso de map--------------------------------------------------------------
let precios = tecnologia.map(prodc => prodc.precio);
console.log(precios); // [2000, 3000, 2200]

//uso de filter------------------------------------------------------------
// Uso de filter para obtener productos con precio mayor a 2500
let productosCaros = tecnologia.filter(prodc => prodc.precio > 2500);
console.log(productosCaros); 
// [{ productos: "android", precio: 3000 }]

//arreglo numero 4 reduce---------------------------------------------------
let booleanos = [true, false, true, false, true];
let contarVerdaderos = booleanos.reduce((acumulador, valor) => acumulador + (valor ? 1 : 0), 0);
console.log(contarVerdaderos); // 3
//foreach-------------------------------------------------------------------
booleanos.forEach(valor => console.log(valor));
//map-----------------------------------------------------------------------
let invertidos = booleanos.map(valor => !valor);
console.log(invertidos); // [false, true, false, true, false]
//filter--------------------------------------------------------------------
let soloVerdaderos = booleanos.filter(valor => valor === true);
console.log(soloVerdaderos); // [true, true, true]  

//funcion sin parametros
const salud2 = () => console.log("¡Hola, mundo!");
console.log(salud2);

// Función con un parámetro
const num2= 10;
const cuadrado = (num2) => num2 * num2;
console.log(cuadrado(num2));  // Llamada a la función con el argumento 'num'





//FUNCIONES TIPO FLECHA ------------------------------------------------------------

// Función con dos parámetros
const a = 1;
const b = 2;
const sumar = (a, b) => a + b;
console.log(sumar(a, b));  // Llamada a la función con los argumentos 'a' y 'b'

// Función con tres parámetros
const multiplicar = (a, b, c) => a * b * c;

// Proporcionamos valores para los parámetros
const c = 2;
const h = 3;
const f = 4;

console.log(multiplicar(c, h, f));  // Llamada a la función con los argumentos 2, 3 y 4

// Función con cuatro parámetros
const d = 4;
const sumar2 = (a, b, c, d) => a + b + c + d;

// Proporcionamos valores para los parámetros
console.log(sumar2(a, b, c, d));  // Llamada a la función con los argumentos 2, 3, 4 y 4

