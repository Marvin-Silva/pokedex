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
    const name = document.createElement("div");
    name.className = "name";
    thumbnail.className = "thumbnail";
    name.innerHTML = data.name;
    thumbnail.src = data.sprites.front_default;

    
    // ...
    fetch(pokemon.url).then(transformToJson).then((data) => {
        // ...

        //console.log(pokemon);
       /* item.textContent = name;
        name.appendChild(item)*/
      
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

    const fields = description.querySelectorAll("dd");
    fields.forEach((dd) => {
        // ...
    
    });
}

/**
 * Hide the description
 */
function hideDescription () {
    description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
console.log(api);