function gestionaGeo (position) {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.accuracy);
    console.log(position.coords.altitude);
    console.log(position.coords.altitudeAccuracy);
    console.log(position.coords.heading);
    console.log(position.coords.speed);
    console.log(position.timestamp);
}
function pillaGeo () {
    navigator.geolocation.getCurrentPosition(gestionaGeo);
}
function empiezaGeo () {
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(gestionaGeo);
    } else {
        console.log("Su posición no está disponible.");
    }
}

function finalizaGeo () {
    if (navigator.geolocation) {
        navigator.geolocation.clearWatch (id);
    } else {
        console.log("Su posición no está disponible.")
    }
}
function init (){
    console.log("init");
    if (navigator.geolocation) {
        console.log("La geolocalización es soportada");

        document.getElementById("posicion").addEventListener("click", pillaGeo);

        document.getElementById("posicionContinuada").addEventListener("click", empiezaGeo);

        document.getElementById("finSeguimiento").addEventListener("click", finalizaGeo);
    }
}