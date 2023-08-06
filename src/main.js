const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const botao1 = document.querySelector("#botao1");
const botaoimg1 = document.querySelector("#botaoimg1");

botao1.addEventListener("click", (e) => {
  document.querySelector("#botao1").disabled = true;
  player1.src = "../assets/PLAYER1-ACTION.png";
  player2.src = "../assets/PLAYER2-ACTION.png";
  botaoimg1.src = "../assets/BOTAO1-CLICK.png";
  const timer = setInterval(function () {
    player1.src = "../assets/PLAYER1-IDLE.png";
    player2.src = "../assets/PLAYER2-IDLE.png";
    botaoimg1.src = "../assets/BOTAO1-NORMAL.png";
    document.querySelector("#botao1").disabled = false;
    clearInterval(timer);
  }, 1000);
});
