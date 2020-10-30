const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=150";

/**
 * Try to parse a response as JSON data
 */
function transformToJson (response) {
    if (response.ok) {
        return response.json();
    }

    throw Error("Content not loaded");
}

/**
 * Clear the list of all its items
 */
function emptyList () {
    // ...
}

/**
 * Create an item, fetch its data and setup event listener
 */
function createItem (pokemon) {
    // Create a li tag
    const item = document.createElement("li");
    const image  = document.createElement("img");
    const name  = document.createElement("name");
    
    name.innerHTML = pokemon.name;

    // ...
    fetch(pokemon.url).then(transformToJson).then((data) => {
        // ...
        item.appendChild(image);
        list.appendChild(item);
        image.setAttribute("src", data.sprites.front_default);
        image.url = pokemon.url;
        item.insertAdjacentElement('beforeend', name);

        item.addEventListener("click", () =>  {
            showDescription(data)
        });
        
    });
}

/**
 * fill the item list with values
 */
function fillList (json) {
    emptyList();
    json.results.forEach(createItem);

}

/**
 * Fill and display the description
 */
function showDescription (data) {
    description.classList.add("show");

    const fields = description.querySelectorAll("dd")
    const imageFields = description.querySelector("img")
    if (imageFields != null){
        imageFields.remove();
    }


    image.setAttribute("src", data.sprites.other.dream_world.front_default);
    description.insertAdjacentElement("afterbegin",image);

    fields.forEach((dd) => {
        // ...
      dd.innerText = "";
      const desc = dd.className;
      if (desc == "types"){
        dd.innerText = "";
        console.log(data.types);
        data.types.forEach((types) => {
            console.log(type.type.name);
            dd.innerHTML += "<div class='type'>" + type.type.name + "</div>";
            console.log(dd);
        });
      }else {
          dd.innerText = data [desc];
      }
    
    });
}

/**
 * Hide the description
 */
function hideDescription () {
    description.classList.remove("show");
    const fields = description.querySelectorAll("dd");
    dd.innerText = "";
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
console.log(api);