let textElement = document.getElementById("text");
let text = "FRONT-END DEVELOPER";
let speed = 70;

function typeEffect(element, message, index = 0) {
  if (index < message.length) {
    element.innerHTML += message.charAt(index);
    setTimeout(() => typeEffect(element, message, index + 1), speed);
  }
}

typeEffect(textElement, text);
