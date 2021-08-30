const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const sexo = document.querySelector("#sexo-input");
const hora = document.querySelector("#hora-input");
const idioma = document.querySelector("#idioma-input");
const form = document.querySelector("#saludador-form");

function esMayor(x) {
  if(x>=18)
    return "Señor(a) "
  else
    return ''
}

function genero(sexo, mayor) {
  if(sexo == "M" && mayor == "Señor(a) ")
    return "Señor "
  if(sexo == "F" && mayor == "Señor(a) ")
    return "Señora "
  return ''
}

function tiempo(hoy){
  if(hoy.getHours() >= 6 && hoy.getHours() <= 11 && hoy.getMinutes() <= 59)
    return "Buenos Días "
  if(hoy.getHours() >= 12 && hoy.getHours() <= 17 && hoy.getMinutes() <= 59)
    return "Buenas Tardes "
  if(hoy.getHours() >= 18 && hoy.getHours() <= 5 && hoy.getMinutes() <= 59)
    return "Buenas Noches "
}

form.addEventListener("submit", (event) => {
  let now = new Date();
  if(!nombre.value)
    alert("Hola Bienvenid@");
  else if(!edad.value)
  {
    alert("Hola " + nombre.value);
  }
  else if(!sexo.value)
  {
    alert("Hola " + esMayor(edad.value) + nombre.value);
  }
  else if(!hora.checked)
  {
    alert("Hola " + genero(sexo.value, esMayor(edad.value)) + nombre.value);
  }
  else
  {
    alert(now)
    alert("Hola " + tiempo(now) + genero(sexo.value, esMayor(edad.value)) + nombre.value)
  }
});
