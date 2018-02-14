function empezando(event){
    console.log("Comenzando");
    var data=event.target.id;
    event.dataTransfer.setData("text", data);
};
function dentro(){
    event.preventDefault();
    console.log("Arrastrando");
};
function fuera(){
    
    event.preventDefault();
    console.log("Se fue, se fue...");
};
function sobre(event){
    event.preventDefault();
    console.log("sobrevolando");
}
function soltar(event){
    event.preventDefault();
    console.log("Soltado");
    var data = event.dataTransfer.getData("text"); /*envia datos que se pueden recoger)*/
    console.log(data);
    var midiv=document.getElementById("dos");
    console.log(midiv);
    midiv.innerHTML+="<p>Cogidos datos:"+data+"</p>";
}
function init(){
    console.log("DOM cargado!");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tercer = document.getElementById("tres");
    uno.addEventListener("dragstart",empezando);
    dos.addEventListener("dragenter", dentro);
    dos.addEventListener("dragleave", fuera);
    tres.addEventListener("dragover", sobre);
    tres.addEventListener("drop", soltar);
    };  
    document.addEventListener("DOMContentLoaded", init);