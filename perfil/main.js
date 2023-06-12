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
    .then ((res) => res.json())
    .then ((character) => {
        const cardList = document.getElementById('id_img');
        const card = document.createElement('div');
        card.className = 'product-card';
        const image = document.createElement('img');
        image.setAttribute('src', character.image);
        image.setAttribute('alt', character.name);
        cardList.appendChild(card);
        card.appendChild(image);

        const name = document.getElementById('nome1');
        name.innerText = character.name;


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