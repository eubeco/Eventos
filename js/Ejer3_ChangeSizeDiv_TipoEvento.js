function changeSizeDiv(elEvento) {
  var evento = elEvento || window.event;
  switch (evento.type) {
    case 'mouseover':
      this.style.fontSize = "16pt";
      break;
    case 'mouseout':
      this.style.fontSize = "12pt";
      break;
  }
}

window.onload = function() {
  document.getElementById("textoDiv").onmouseover = changeSizeDiv;
  document.getElementById("textoDiv").onmouseout = changeSizeDiv;
}
