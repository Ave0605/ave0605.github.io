const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const mensaje = document.getElementById("mensaje");

botonSi.addEventListener("click", () => {
  mensaje.textContent = "¡Excelente!";
  mensaje.style.display = "block";
});

botonNo.addEventListener("mouseover", () => {
  const titulo = document.querySelector("h1");
  const opciones = document.querySelector(".opciones");
  const posicionX = Math.floor(Math.random() * (window.innerWidth - opciones.offsetWidth));
  const posicionY = Math.floor(Math.random() * (window.innerHeight - titulo.offsetHeight - opciones.offsetHeight));
  titulo.style.top = posicionY + "px";
  opciones.style.top = (posicionY + titulo.offsetHeight) + "px";
  titulo.style.left = posicionX + "px";
  opciones.style.left = posicionX + "px";
});