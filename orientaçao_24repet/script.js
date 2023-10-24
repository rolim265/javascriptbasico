const people = [];

const personPrototype = {
    firstName: "",
    lastName: "",
    language: "",
    setDetails(firstName, lastName, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
    },
    displayDetails() {
        const displayArea = document.querySelector(".display-details");
        const personInfo = document.createElement("div");
        personInfo.innerHTML = `
            <p>Nome: ${this.firstName}</p>
            <p>Sobrenome: ${this.lastName}</p>
            <p>Personalidade: ${this.language}</p>
        `;
        displayArea.appendChild(personInfo);
    }
};

const form = document.getElementById("personForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const language = document.getElementById("language").value;

    const person = Object.create(personPrototype);
    person.setDetails(firstName, lastName, language);
    person.displayDetails();
    people.push(person);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("language").value = "";
});
