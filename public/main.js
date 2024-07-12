const title = document.querySelector(".titlle");
const poke_box = document.querySelector(".poke_box");
const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const spinner = document.querySelector("#spinner");



const pokeFetch = (id) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

      .then((response) => response.json())

      .then((data) => {

        pokePrint(data);
        
        spinner.style.display = "none";

        console.log(data);

      });
}


const pokeGet = (number) => {

  spinner.style.display = "block";

    for (let i = 1; i <= number; i++) {

        pokeFetch(i);

    }
}

const pokePrint = (pokeData) => {


    const poke_target = document.createElement("div");
    const poke_card = document.createElement("div");
    const poke_imgCon = document.createElement("div");
    const poke_name = document.createElement("p");
    const poke_img = document.createElement("img");
    const poke_id = document.createElement("p");
    const poke_infCon = document.createElement("div");
    const poke_abil = document.createElement("p");
    const poke_w = document.createElement("p")
    

    poke_target.classList.add("poke_node"); 
    poke_card.classList.add("poke_ball");       
    poke_name.classList.add("name");
    poke_imgCon .classList.add("poke_container");
    poke_id.classList.add("poke_id");
    poke_infCon.classList.add("info");
    poke_abil.classList.add("text");
    poke_w.classList.add('text');


    poke_name.textContent = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1); 
    poke_img.src = pokeData.sprites.other.home.front_default;
    poke_id.textContent = ` --- ${pokeData.id.toString().padStart(3,0)}`;  
    poke_abil.textContent = 'Abilities: ' + pokeData.abilities.map(ability => ability.ability.name).join(' and ');
    poke_w.textContent = "Weight: " + pokeData.weight + " Kg"
    
    
    poke_target.appendChild(poke_card);
    poke_card.appendChild(poke_imgCon);
    poke_target.appendChild(poke_name);
    poke_target.appendChild(poke_id);
    poke_imgCon.appendChild(poke_img);
    poke_target.appendChild(poke_infCon);
    poke_infCon.appendChild(poke_abil);
    poke_infCon.appendChild(poke_w);
    poke_card.appendChild(poke_infCon)
    poke_box.appendChild(poke_target);

}


document.addEventListener("keyup", e => {

  if (e.target.matches(".input")){

      if (e.key ==="Escape")e.target.value = "";

      document.querySelectorAll(".name").forEach(pokemon =>{

          pokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())

            ?pokemon.parentElement.style.display = 'flex'
            :pokemon.parentElement.style.display = 'none';
      });
  };
});


document.addEventListener("keyup", e => {

  if (e.target.matches(".input2")){

      if (e.key ==="Escape")e.target.value = "";

      document.querySelectorAll(".poke_id").forEach(id =>{

          id.textContent.includes(e.target.value)

            ?id.parentElement.style.display = 'flex'
            :id.parentElement.style.display = 'none';

      });
  };
});



pokeGet(200);


 