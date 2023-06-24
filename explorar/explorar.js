
const titulonot= document.getElementById("titulonot");
const notificacao= document.querySelectorAll(".div_notificacao");
const notificacaoqnt = notificacao.length;

titulonot.textContent= titulonot.textContent +' | ' + notificacaoqnt ;

//-----------------------------------pop up notificacao

const divpopnotificacao = document.querySelector(".div_popnotificacao");
const botaonot = document.getElementById("botaonot");

botaonot.addEventListener("click", function() {
  if (divpopnotificacao.style.display === "none") {
    divpopnotificacao.style.display = "block";
  } else {
    divpopnotificacao.style.display = "none";
  }
});
