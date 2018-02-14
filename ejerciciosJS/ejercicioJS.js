var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    for(var i = 0; i < 12; i++) {    
    console.log(meses[i]);
    }

    for( i in meses) {    
    console.log(meses[i]);
    }

var valores = [true, 5, false, "hola", "adios", 2];
    for(var i = 3; i < 5; i++) 
    console.log(valores[i]);

 
    console.log(valores[0]);
    console.log(valores[2]);


    console.log(valores[1]);
    console.log(valores[5]);


//var valores = [true, 5, false, "hola", "adios", 2];
//    for (i in valores) {
//        if(!isNaN( valores[i])) && valores[i]!=true && 
//            valores[i]!=false {
//            console.log(valores[i])
//        }
//    }

    console.log(valores [1] + valores [5]);
  
    if(valores[1]>valores[5]) {
        console.log("Es mayor");
    }

var numeritos=[];
    for(var i=0; i<10; i++) {
        numeritos.push(0);
    }
    console.log(numeritos);

var i=0;
    while(i<10) {
    console.log(numeritos[i]);
    i++;
}

i=0
    do{
        console.log(numeritos[i]);
        i++;
    }while(i<10);

for (i in numeritos){
    console.log(numeritos[i]);
}

var veinte=[];
    for(var i=0; i<20; i++) {
        veinte.push(0);
    }
    console.log(veinte);

var numero_errores=1;
switch(numero_errores){
    case 1:
        console.log("No lo has hecho mal");
        break;
    case 2:
        console.log("Puede pasar");
        break;
    case "Black":
        console.log("Bankia tiebe 11 consejeros");
        break;
    default:
        console.log("Suspenso");       
}

    for(var i=0; i<10; i+=2) {
            console.log(i);
    }

//Ejercicio4
var doscientos=[];
    for(var i=0; i<200; i++) {
        doscientos.push(0);
}
    doscientos[4] = "cuatro";
    doscientos[7] = "siete";
    doscientos[18] = "dieciocho";
    doscientos[9] = true;
    doscientos[34] = false;
    doscientos[45] = true;
console.log(doscientos);

//Ejercicio5
var treinta = []
    for (var i=0; i<30; i++) {
        treinta.push(0);    
    }
console.log(treinta);
var i=0;
    while(i<30){
    console.log(treinta[i]);
    i++;
}

i=0
    do{
        console.log(treinta[i]);
        i++;
    }while(i<30);

for (i in treinta) {
    console.log(treinta[i]);
}

//Ejericio6
var TengoCarnet = [true, false]
    if (TengoCarnet[0]) {
    console.log("Puedes conducir");
    }
    if (TengoCarnet[1]) {
    console.log("No puedes conducir");
    }
 
//Ejercicio7
var nota = 6;
switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Suspenso");
        break;
    case 5:
    case 6:
        console.log("Aprobado");
        break;
    case 7:
    case 8:
        console.log("Notable");
        break;
    case 9:
    case 10:
        console.log("sobresaliente");
        break;
}
