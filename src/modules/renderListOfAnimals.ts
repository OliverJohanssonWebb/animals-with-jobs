//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter

import renderAnimalInfo from "./renderAnimalInfo.js";
import { Animal } from "./IAnimal";
export default function renderListOfAnimals(animals: Animal[]): void {
  const ul = document.querySelector(".list-of-animals ul");

  if (!ul) return;

  
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.classList.add("animal-list");
    li.textContent = animal.name;

    li.addEventListener("click", () => {
      renderAnimalInfo(animal);
    });

    ul.appendChild(li);
  });
}