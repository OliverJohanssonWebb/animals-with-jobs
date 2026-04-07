import fetchAnimals from "./modules/fetchAnimals.js";
import renderListOfAnimals from "./modules/renderListOfAnimals.js";
async function init() {
    const animals = await fetchAnimals();
    if (!animals) {
        console.error("Ingen data hittades");
        return;
    }
    renderListOfAnimals(animals);
}
console.log("Scriptet har startat");
init();
