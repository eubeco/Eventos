function mostrarMensaje() {
  alert("Has pulsado sobre un bot\u00F3n");
}

window.onload = function() {
  //document.getElementsByTagName("input").onclick = mostrarMensaje;
  var arrayInput = document.getElementsByTagName("input");
  for (var i =0; i < arrayInput.length; i++){
    if (arrayInput[i].type == "button") {
      arrayInput[i].onclick = mostrarMensaje;
    }
  }
}
