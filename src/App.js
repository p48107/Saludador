//alert("Hola desde JavaScript");
function checkAcceptation() {
    if (!confirm("Presiona ACEPTAR si estas list@ para empezar con javascript, para volver presione CANCELAR"))
    history.go(-1);
    return " "
  }
checkAcceptation();