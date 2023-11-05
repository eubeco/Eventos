function muestraReloj(){
  var fechaHora = new Date();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var seg = fechaHora.getSeconds();

  if (horas < 10) { horas = '0' + horas;}
  if (minutos < 10) { minutos = '0' + minutos;}
  if (seg < 10) { seg = '0' + seg;}

  document.getElementById("reloj").innerHTML= horas + ':' + minutos +':' + seg;
}

window.onload = function (){
  alert("P\u00E1gina que contiene un reloj digital");
  setInterval(muestraReloj, 1000);
}

window.onbeforeunload = function (){
  return("P\u00E1gina cancelada");
}





