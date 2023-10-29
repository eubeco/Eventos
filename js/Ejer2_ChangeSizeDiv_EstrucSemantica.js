//Don't work. No funciona. I don't know where is wrong. No sé donde está el error.
function changeSizeDiv(tamanyFuente) {
  this.style.fontSize = tamanyFuente + "pt";
}

window.onload = function() {
  document.getElementById("textoDiv").onmouseover = function() {
    changeSizeDiv("16");
  };
  document.getElementById("textoDiv").onmouseout = function() {
    changeSizeDiv("12");
  };
}
