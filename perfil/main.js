window.onload = () =>{

    const randomNumber = Math.random() * 826;
    let round = Math.ceil(randomNumber);

    const palavras = ['Unila', 'Unioeste', 'Uab', 'Sesi'];
    const randomNumber2 = Math.floor(Math.random() * palavras.length);
    const inst = palavras[randomNumber2];
    const palavraElement = document.getElementById('palavra');
    palavraElement.innerText = inst;

    const randomDay = Math.floor(Math.random() * 28) + 1; // Gera um dia aleatório entre 1 e 28
    const randomMonth = Math.floor(Math.random() * 12) + 1; // Gera um mês aleatório entre 1 e 12
    const randomYear = Math.floor(Math.random() * (2022 - 2010 + 1)) + 2010; // Gera um ano aleatório entre 2015 e 2022
    const dataAleatoria = `${randomDay.toString().padStart(2, '0')}/${randomMonth.toString().padStart(2, '0')}/${randomYear}`;
    const dataElement = document.getElementById('data');
    dataElement.innerText = dataAleatoria;

    if (round === 0){
        round = 1;
    }
    


    fetch('https://rickandmortyapi.com/api/character/' + round)
    .then((res) => res.json())
    .then((character) => {
      const cardList = document.querySelectorAll('.id_img');
      cardList.forEach((card) => {
      const image = document.createElement('img');
      image.setAttribute('src', character.image);
      image.setAttribute('alt', character.name);
      card.appendChild(image);
      });


        const nome1 = document.querySelectorAll('.nome1');
        nome1.forEach((names) => {
          names.innerText = character.name;
        });



        const gender = document.getElementById('gen1');
    
        if(character.gender === "Male"){
            const genero = "Masculino";
            gender.innerText = genero;
        }

        else if(character.gender === "Female"){
            const genero = "Feminino";
            gender.innerText = genero;
        }
        else{
            const genero = "Outro";
            gender.innerText = genero;
        }
   })
  .catch((err) => console.error(err)) 
}


//----------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------pop-up de comentarios

const botoes = document.querySelectorAll(".botao");
const popcom = document.querySelector(".popcom");

botoes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    if (popcom.style.display === "none") {
      popcom.style.display = "block";
    } else {
      popcom.style.display = "none";
    }
  });
});

//-----------------------------------------------------------------------------------pop-up numero de comentarios

const titulocoment= document.getElementById("titulocoment");
const popcoments= document.querySelectorAll(".popcoments");
const popcomentsqnt = popcoments.length;

titulocoment.textContent= titulocoment.textContent +' | ' + popcomentsqnt ;

//-----------------------------------------------------------------------------------pop-up numero de notificacao

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
//-----------------------------------------------------------------pop up editar
const popedit = document.getElementById("popedit");
const displayedit = document.querySelectorAll(".displayedit");

popedit.addEventListener("click", function() {
  if (displayedit.style.display === "none") {
    displayedit.style.display = "block";
  } else {
    displayedit.style.display = "none";
  }
});