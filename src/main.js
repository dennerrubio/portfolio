const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const guy = document.querySelector("#guy");
const juri = document.querySelector("#juri");
const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
const botaoimg1 = document.querySelector("#botaoimg1");
const botaoimg2 = document.querySelector("#botaoimg2");
const bloco = document.querySelector("#bloco");

//SECTION - ART1
botao1.addEventListener("click", (e) => {
  document.querySelector("#botao1").disabled = true;
  player1.src = "../assets/art1/PLAYER1-ACTION.png";
  player2.src = "../assets/art1/PLAYER2-ACTION.png";
  botaoimg1.src = "../assets/art1/BOTAO1-CLICK.png";
  const timer = setInterval(function () {
    player1.src = "../assets/art1/PLAYER1-IDLE.png";
    player2.src = "../assets/art1/PLAYER2-IDLE.png";
    botaoimg1.src = "../assets/art1/BOTAO1-NORMAL.png";
    document.querySelector("#botao1").disabled = false;
    clearInterval(timer);
  }, 1000);
});

//SECTION - ART2
botao2.addEventListener("click", (e) => {
  document.querySelector("#botao1").disabled = true;
  guy.src = "../assets/art2/GUY-POSE1.png";
  juri.src = "../assets/art2/JURI-ACTION.gif";
  botaoimg2.src = "../assets/art2/BOTAO2-CLICK.png";
  const timer = setInterval(function () {
    guy.src = "../assets/art2/GUY-IDLE.png";
    juri.src = "../assets/art2/JURI-IDLE.gif";
    botaoimg2.src = "../assets/art2/BOTAO2-NORMAL.png";
    document.querySelector("#botao1").disabled = false;
    clearInterval(timer);
  }, 1000);
});

//BACK TO THE TOP
const mybutton = document.getElementById("btn-back-to-top");
const scrollFunction = () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

mybutton.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);
