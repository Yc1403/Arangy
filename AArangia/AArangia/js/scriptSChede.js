class Scheda{
    constructor(name, description, duration, price, id, shortDescription, img){
        
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.price = price;
        this.id = id;
        this.shortDescription = shortDescription;
        this.img = img;
    }
  }

  function caricaScheda(){
    
    const URL = "http://localhost:3000/corsi";
  
    fetch(URL)
    .then(data =>{
        return data.json();
  
    }).then(response =>{
        console.log(response);
        response.forEach(scheda => {
            let miScheda = new Scheda(scheda.name, scheda.description, scheda.duration, scheda.price, scheda.id, scheda.shortDescription, scheda.img)
            rigaScheda.appendChild(creaScheda(miScheda));
        });
    })
  }


  
  document.addEventListener("DOMContentLoaded", caricaScheda);

  let rigaScheda = document.querySelector("#rigaScheda");

  /**
   * 
   * @param {Scheda} scheda
   * @returns object
   */

  function creaScheda(scheda){

    let cardCol = document.createElement("div");
      cardCol.setAttribute("class", "col-md-4 mb-3");
  
    let card = document.createElement("div");
      card.setAttribute("class", "card");

    card.innerHTML = `<img class="card-img-top" src=${scheda.img} alt="" />
                <div class="card-body">
                    <h3 class="card-title">${scheda.name}</h3>
                    <p class="card-text">Id: ${scheda.id}</p>
                    <p class="card-text">Description: ${scheda.description}</p>
                    <p class="card-text">Duration: ${scheda.durata}</p>
                    <p class="card-text">Price: ${scheda.price}</p>
                </div>`;

    cardCol.appendChild(card);

    return cardCol;
  }