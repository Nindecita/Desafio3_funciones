


// EJERCICIO 2 cambia el color de fondo de un elemento de HTML al hacerle click

function pintar(element, color = 'green') {
	
  element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", () => {
  pintar(ele, 'yellow');
});