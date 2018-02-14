class Moto {
    constructor (matricula, km=0){
        this.matricula=matricula;
        this.km=km;
        this.setMatricula=function(matricula){
            this.matricula=matricula;
        };
        this.setKm=function(km){
            this.km=km;
        };
        this.getMatricula=function(){
            return this.matricula;
        };
        this.getKm=function(){
            return this.km;
        };
    };
};

var miBurra=new Moto ("SA1234H", "");
console.log(miBurra);

var miBurra=new Moto ();
miBurra.matricula="SA1234L"
console.log(miBurra.matricula);

var motito=new Moto ();
console.log(motito);

var miBurritoSabanero=new Moto("1234JPG", "1520447");
console.log(miBurritoSabanero);

miBurra.setKm(15000);
miBurra.setMatricula("7896ASK");
console.log(miBurra);

class Animal{
    constructor(edad=0){
        this.edad=edad;
        this.setEdad=function(edad){
            this.edad=edad;
        };
        this.getEdad=function(){
            return this.edad;
        };
    };
};
console.log(Animal);

animalico=new Animal ();
console.log(animalico);

animalico.setEdad(3);
console.log(animalico.edad);

var animalico2=new Animal("2");
console.log(animalico.edad);

class Gato extends Animal{
    constructor (edad, nombre) {
        super(edad);
        this.nombre=nombre;
    };
};

var gatete=new Gato (1);
console.log(gatete);

var gatete2=new Gato (2, "Nyska");
console.log(gatete2);

class Alumno{
    constructor (nombre, dni, tlf, email,notas=[1,4,10,7,4,8,9,1]){
        this.nombre=nombre;
        this.dni=dni;
        this.tlf=tlf;
        this.email=email;
        this.acum=0;
        this.notas=notas;
        this.meterNotas=function(nota){
            notas.push(nota);
        };
        this.setNombre=function(nombre){
            this.nombre=nombre;
        };
        this.setDni=function(dni){
            this.dni=dni;
        };
        this.setTlf=function(tlf){
            this.tlf=tlf;
        };
        this.setEmail=function(email){
            this.email=email;
        };
        this.setNotas=function(notas){
                this.notas=notas;
        };
        this.getNombre=function(nombre){
            return this.nombre;
        };
        this.getDni=function(dni){
            return this.dni;
        };
        this.getTlf=function(tlf){
            return this.tlf;
        };
        this.getEmail=function(email){
            return this.email;
        };
        this.getNotas=function(notas){
            return this.notas;
        };
        this.hacerMedia=function(){
            var acum=0
            for(item of notas){
            acum+=item
            };
            this.acum=acum/notas.length;
            return this.acum;
            };
        this.aprobadoSuspenso=function(mediaAcum){
            if (this.acum>5){
            console.log("Aprobado");
            }else{console.log("Suspenso");
            };
        };
    };
};

var alumno1=new Alumno("Fulanito", "58963374J", 6872455, "fulanio@jj");
console.log(alumno1);

class Nota{
    constructor (valor, asignatura){
        this.valor=valor;
        this.asignatura=asignatura;
        this.setValor=function(valor){
            this.valor=valor;
        };
        this.setAsignatura=function(asignatura){
            this.asignatura=asignatura;
        };
        this.getValor=function(valor){
            return this.valor;
        };
        this.getAsignatura=function(asignatura){
            return this.asignatura;
        };
    };
};
var nota1=new Nota(8, "matematicas");
console.log(nota1);

