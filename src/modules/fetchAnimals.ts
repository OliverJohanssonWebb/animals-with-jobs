import { Animal } from "./IAnimal.js";

export default async function fetchAnimals(): Promise<Animal[] | null> {
  try {
    const response = await fetch("data/data.json");
    const data: Animal[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching animal data:", error);
    return null;
  }
}

//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
