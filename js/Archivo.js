var saludo = "Hola ";
var nombre = "Daniel";

var i = prompt("Ingrese un numero entre 1 y 7")

// alert(saludo + nombre + " " + apellido);


var dias =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

console.log('El dia seleccionado es: '+ dias[i-1])
console.warn('El dia seleccionado es: '+ dias[i-1])
console.log('El dia seleccionado es: '+ dias[i-1])

// var resultado=0;
// var numero=100;
// var i =0;
// while(i<= numero){
//     resultado+= i;
//     i++
// }
// console.log(resultado)


// var cadena = "En un lugar de la marcha....";
// var letras = cadena.split("");
// var resultado= "";
// for(i in letras){
//     if(letras[i]=='a')
//     {
//         break;
//     }
//     else{
//         resultado += letras[i];
//     }
// }

// console.log(resultado)


// var numero1 = 10;
// var numero2 = 7;

// function sumaymuestra(){
//     var resultado=numero1 + numero2;
//     console.warn('El resultado es : '+ resultado)
// }

// sumaymuestra();


function calculaPrecioTotal(precio, porcentajeimp){
    var gastosEnvio = 10;
    var precioComImp = (1+ porcentajeimp/100) * precio;
    var precioTotal = precioComImp + gastosEnvio;
    return precioTotal.toFixed(2);
}

var precioTotal= calculaPrecioTotal(23,34,16)

function sumaaja(n1=0, n2=0){
    var total = n1+n2;
    return console.log('El resultado es :' + total)
}
