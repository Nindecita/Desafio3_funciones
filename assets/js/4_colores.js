//REQUERIMIENTO 3, ejercicio 1

const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");
const keyDiv = document.getElementById("key");

//Función para darle los estilos a lod divs
function setStyles() {
  setDefaultStyle(divAzul);
  divAzul.style.backgroundColor = "blue";

  setDefaultStyle(divRojo);
  divRojo.style.backgroundColor = "red";

  setDefaultStyle(divVerde);
  divVerde.style.backgroundColor = "green";

  setDefaultStyle(divAmarillo);
  divAmarillo.style.backgroundColor = "yellow";

  setDefaultStyle(keyDiv);
  changeColor(keyDiv, "white");
  keyDiv.style.border = "2px solid black";
}

document.addEventListener("DOMContentLoaded", function () {
  setStyles();
});

divAzul.addEventListener("click", function () {
  changeColor(divAzul, "black");
});
divRojo.addEventListener("click", function () {
  changeColor(divRojo, "black");
});
divVerde.addEventListener("click", function () {
  changeColor(divVerde, "black");
});
divAmarillo.addEventListener("click", function () {
  changeColor(divAmarillo, "black");
});

//REQUERIMIENTO 3, ejercicio 2

let color;

document.addEventListener("keydown", function (event) {
  /*switch (event.key) {
    case "a":
      color = "pink";
      changeColor(keyDiv, color);
      break;
    case "s":
      color = "orange";
      changeColor(keyDiv, color);
      break;
    case "d":
      color = "lightblue";
      changeColor(keyDiv, color);
      break;
    case "q":
      color = "purple";
      createElement(color);
      break;
    case "w":
      color = "grey";
      createElement(color);
      break;
    case "e":
      color = "brown";
      createElement(color);
      break;
    default:
      break;
  }*/

  if (event.key === "a") {
    color = "pink";
    changeColor(keyDiv, color);
  } else if (event.key === "s") {
    color = "orange";
    changeColor(keyDiv, color);
  } else if (event.key === "d") {
    color = "lightblue";
    changeColor(keyDiv, color);
  } else if (event.key === "q") {
    // aqui comienza el ejercicio 3
    color = "purple";
    createElement(color);
  } else if (event.key === "w") {
    color = "grey";
    createElement(color);
  } else if (event.key === "e") {
    color = "brown";
    createElement(color);
  }
});

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

//REQUERIMIENTO 3, ejercicio 3
function createElement(color) {
  const newDiv = document.createElement("div");
  setDefaultStyle(newDiv);
  newDiv.style.backgroundColor = color;
  newDiv.style.border = "2px solid black";
  document.body.appendChild(newDiv);
}

function setDefaultStyle(element) {
  element.style.width = "200px";
  element.style.height = "200px";
}
