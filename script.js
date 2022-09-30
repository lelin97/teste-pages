var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var menumob = document.getElementById("menumob");

function openmenu() {
  menumob.style.right = "0";
}

function closemenu() {
  menumob.style.right = "-200px";
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 100 * i);
  });
}

const titulo = document.querySelector(".type-effect");
typeWriter(titulo);

window.sr = ScrollReveal({ reset: true });

sr.reveal(".myself-span", { duration: 2000 });

sr.reveal(".sobre-info", { duration: 2000 });

sr.reveal(".portfolio-container", { duration: 2000 });
