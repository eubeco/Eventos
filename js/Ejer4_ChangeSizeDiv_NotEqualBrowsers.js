function changeSizeDiv(elEvento) {
  switch (elEvento.type) {
    case 'mouseover':
      this.style.fontSize = "16pt";
      break;
    case 'mouseout':
      this.style.fontSize = "12pt";
      break;
  }

}
//No es necesario especificar las sentencias para Internet Explorer pues ya está en desuso, además el IntelliJ (attachEvent) ni la "compila"
window.onload = function() {
  document.getElementById("textoDiv").addEventListener("mouseover", changeSizeDiv, false);
  document.getElementById("textoDiv").addEventListener("mouseout",  changeSizeDiv, false);
}

