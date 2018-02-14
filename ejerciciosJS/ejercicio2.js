
function CalculaTotalLinea (importe, unidades) {
    var multi = importe*unidades;
    return multi;
}
var linea1 = CalculaTotalLinea (2,5);
console.log(linea1);

var linea2 = CalculaTotalLinea (4,7);
console.log(linea2);

var lineas=[linea1, linea2];   
console.log(lineas);

function calculaBaseImponible (lineas) {
    var baseImponible=0;
    for (i in lineas){
        baseImponible+=lineas[i];
    }
    return baseImponible;
}
var baseImponible=calculaBaseImponible(lineas);
console.log(baseImponible);

function calcuaIVA (baseImponible, IVA) {
    var r= baseImponible*IVA/100;
    return r;
}
var totalFactura = calcuaIVA(baseImponible, 21);
console.log(totalFactura);

function calculaIRPF (baseImponible, IRPF){
    var rIRPF= -1*baseImponible*IRPF/100;
    return rIRPF;
}

var retencion = calculaIRPF(baseImponible, 15);
console.log(retencion);

function calculatotalFactura (baseImponible, totalFactura, retencion) {
    var ct= baseImponible+totalFactura+retencion;
    return ct;
}
var TotalaRecibir = calculatotalFactura (baseImponible, totalFactura, retencion);
console.log(TotalaRecibir)
