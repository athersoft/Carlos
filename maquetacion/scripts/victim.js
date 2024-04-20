function changeColor(element) {
    var colors = ["green", "red", "yellow"];
    var currentColor = element.style.backgroundColor;
    var index = colors.indexOf(currentColor);
    
    if (index == -1 || index == colors.length - 1) {
      // Si el color actual no está en la lista o es el último color de la lista, cambia al primer color
      element.style.backgroundColor = colors[0];
    } else {
      // De lo contrario, cambia al siguiente color de la lista
      element.style.backgroundColor = colors[index + 1];
    }
  }