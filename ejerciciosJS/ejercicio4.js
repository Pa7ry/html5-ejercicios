var cliente1={
    nombreCliente:"Pepito",
    direccion_fisica:"CalleAlcala",
    email:"pepito@email.es",
    tlf:"632154789",
    persona_contacto :"Pepita",
    facturacion: [2, 25],
    
    setnombreCliente: function (Patri) {
        this.nombreCliente=Patri;
    },
    setDireccion_fisica: function (miCasa) {
        this.direccion_fisica=miCasa;
    },
    setemail: function (patri_email) {
        this.email=patri_email;
    },
    settlf: function (miTelefono) {
        this.tlf=miTelefono;
    },
    setpersona_contacto: function (Darko) {
        this.persona_contacto=Darko;
    },


    getnombreCliente: function () {
        return this.nombreCliente;
    },
    getDireccion_fisica: function () {
        return this.direccion_fisica;
    },
    getemail: function () {
        return this.email;
    },
    gettlf: function () {
        return this.tlf;
    },
    getpersona_contacto: function () {
        return this.persona_contacto;
    },

    addFactura: function (numero){
        this.facturacion.push(numero);
    },

    totalFacturacion: function(){
        var suma=0;
        for(let item of this.facturacion){
            suma+=item;
        }
        return suma;
    },

    toString: function cliente1() {
        return "cliente1[nombreCliente:"+this.nombreCliente+", direccion_fisica:"+this.direccion_fisica+",email:"+this.email+", tlf:"+this.tlf+", persona_contacto:"+this.persona_contacto+"]";
    },

    direccionFiscal:
};

var cliente2={
    nombreCliente:"Manolita",
    direccion_fisica:"CalleAlcantara",
    email:"manolita@email.es",
    tlf:"632158514",
    persona_contacto:"Manolita",
    toString: function cliente2() {
        return "cliente2[nombreCliente:"+this.nombreCliente+", direccion_fisica:"+this.direccion_fisica+", email:"+this.email+", tlf:"+this.tlf+", persona_contacto:"+this.persona_contacto+"]";
    },

    setnombreCliente: function (Bea) {
        this.nombreCliente=Bea;
    },
    setDireccion_fisica: function (suCasa) {
        this.direccion_fisica=suCasa;
    },
    setemail: function (bea_email) {
        this.email=bea_email;
    },
    settlf: function (suTelefono) {
        this.tlf=suTelefono;
    },
    setpersona_contacto: function (Patri) {
        this.persona_contacto=Patri;
    },


    getnombreCliente: function () {
        return this.nombreCliente;
    },
    getDireccion_fisica: function () {
        return this.direccion_fisica;
    },
    getemail: function () {
        return this.email;
    },
    gettlf: function () {
        return this.tlf;
    },
    getpersona_contacto: function () {
        return this.persona_contacto;
    },
};


console.log(cliente1.nombreCliente);

console.log(cliente1.facturacion[0]);

cliente1.getDireccion_fisica();
console.log(cliente1.getDireccion_fisica());

console.log(cliente2.email);

cliente1.nombreCliente="Maderas Peralta";

console.log(cliente1.nombreCliente);

cliente2.email="info@micasuci.com";

console.log(cliente2.email);

console.log(cliente1.toString());

console.log(cliente2.toString());

cliente1.addFactura(4);
console.log(cliente1.facturacion.length);

console.log(cliente1.totalFacturacion());

/*
var Cliente= function (){
    this.nombreCliente="Pepito"
    this.direccion_fisica="CalleAlcala"
    this.email="pepito@email.es"
    this.tlf="632154789"
    this.persona_contacto ="Pepita"
};
console.log(Cliente);

var Cliente2= function (){
    this.nombreCliente="Manolita"
    this.direccion_fisica="CalleAlcantara"
    this.email="manolita@email.es"
    this.tlf="632158514"
    this.persona_contacto ="Manolita"
};
console.log(Cliente2);
*/