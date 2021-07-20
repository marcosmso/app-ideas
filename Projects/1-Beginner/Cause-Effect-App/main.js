peopleList = document.getElementById("people-list");
formFirstName = document.getElementById("first-name");
formLastName = document.getElementById("last-name");
formCountry = document.getElementById("country");
formTelephone = document.getElementById("telephone");

const people = [
    {name: "Marcos", lastname: "Santana", country: "Brazil", telephone: "+551296367239"},
    {name: "Lisa", lastname: "Simpson", country: "EUA", telephone: "+211126367239"},
    {name: "Roberta", lastname: "Sonza", country: "Brazil", telephone: "+259374367239"},
    {name: "Adele", lastname: "Fernandes", country: "UK", telephone: "+12299297239"},
];

function updateInfo(i) {
    // var [name, lastname, country, telephone] = people[i];
    formFirstName.value =  people[i].name;
    formLastName.value = people[i].lastname;
    formCountry.value = people[i].country;
    formTelephone.value = people[i].telephone;
}

for (i = 0; i < people.length; i++) { 
    var li = document.createElement("li");
    li.classList.add("person-item");
    li.id = i;
    li.appendChild(document.createTextNode(people[i].name));
    peopleList.appendChild(li);
}

peopleList.addEventListener("click", event => {
    if (event.target.className === "person-item"){
        updateInfo(event.target.id);
    }
})