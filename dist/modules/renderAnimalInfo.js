//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const container = document.querySelector(".animal-info");
    if (!container)
        return;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    function renderImage() {
        const img = document.createElement("img");
        img.src = `./images/${animal.imageUrl}`;
        img.alt = `${animal.name} the ${animal.kindOfAnimal}`;
        img.classList.add("animal-image");
        return img;
    }
    function renderNameAndType() {
        const p = document.createElement("p");
        p.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
        p.classList.add("name-and-type");
        return p;
    }
    function renderJobInfo() {
        const p = document.createElement("p");
        const isEmployed = !animal.employmentEndDate;
        const status = isEmployed
            ? "Currently employed"
            : "Not currently employed";
        p.textContent = `${animal.job} - ${status}`;
        p.classList.add("job-info");
        return p;
    }
    function renderAge() {
        const p = document.createElement("p");
        const currentYear = new Date().getFullYear();
        const age = new Date().getFullYear() - Number(animal.birthYear);
        p.textContent = `Age: ${age} years old.`;
        p.classList.add("age-info");
        return p;
    }
    function renderSkills() {
        const container = document.createElement("div");
        container.classList.add("skills-container");
        const title = document.createElement("p");
        title.classList.add("skills-title");
        title.textContent = "Skills:";
        container.appendChild(title);
        const ul = document.createElement("ul");
        ul.classList.add("skills-list");
        let skills = animal.skills;
        if (!skills) {
            skills = [];
        }
        else if (typeof skills === "string") {
            skills = [skills];
        }
        skills.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill;
            ul.appendChild(li);
        });
        container.appendChild(ul);
        return container;
    }
    container.appendChild(renderImage());
    container.appendChild(renderNameAndType());
    container.appendChild(renderJobInfo());
    container.appendChild(renderAge());
    container.appendChild(renderSkills());
}
//=====================================================//
//Rendera ut bilden på djuret
//Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
//=====================================================//
//=====================================================//
//Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
//Följ formatet: "Trash Analyst - Currently (not) employed"
//Använd template literals
//=====================================================//
//=====================================================//
//Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
//Följ formatet:  Age: 9 years old.
//Använd template literals
//Bonus om du skriver ut rubriken "Age" med CSS.
//=====================================================//
//=====================================================//
//Skriv ut en lista på djurets färdigheter
//Följ formatet:    Skills:
//                  Flying
//                  Eating
//Bonus om du skriver ut rubriken "Skills" med CSS.
//=====================================================//
