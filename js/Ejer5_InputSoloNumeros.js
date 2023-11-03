//Hoy en día no merece la pena tener en cuenta al navegador Internet Explorer de Microsoft pues está en desuso
function validarNumero(elevento) {
  //var evento = elEvento || window.event;
  //var codigo = evento.charCode || evento.keyCode;
  //alert (elevento.charCode.toString());//para pruebas


  if (elevento.key === 'Enter'){
    alert ("Has introducido un Intro, se enviará el formulario." );
    return  true;
  }

  if (elevento.charCode >= 48 && elevento.charCode <= 57)
  {
    return true;
  } else
  {
    alert("Esta caja de texto solo permite números!");
    elevento.preventDefault();
    document.getElementById("formulario").reset();
    return false;
  }
}

window.onload = function() {
  //document.getElementById("numero").attachEvent("onkeypress", validarNumero);
  document.getElementById("numero").addEventListener("keypress", validarNumero, false);
}
