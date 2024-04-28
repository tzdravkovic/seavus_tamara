let tamara = {
  ime: "Tamara",
  prezime: "Zdravkovic",
  godine: 25,
  grad: "Nis",
  hobi: ["putovanja", "serije", "drustvene igre"],
  kucni_ljubimac: true,
  pozdrav: function () {
    console.log("Pozdrav, zovem se " + this.ime + " " + this.prezime + ".");
  },
  pozdravNaReactNacin: function () {
    console.log(`Pozdrav, zovem se ${this.ime} ${this.prezime}.`);
    // Ovi posebni navodnici se nalaze pored levo od 1 na tastaturi (iznad TAB dugmeta)
    // Kad hoces da ubacis promenljivu, moras da je obavijes sa ${}
  },
};

// tamara.pozdrav();

tamara.ime = "Milica";
tamara.prezime = "Mitic";

tamara.pozdravNaReactNacin();

/////////////////////////////////////////

let trainer = {
  name: "Stefan",
  lastName: "Stefanovic",
  academy: "SEDC",
  lecture: "Objects",
};

delete trainer.lecture; // Obrisace property lecture
trainer.age = 25; // Dodaje novi proprety koji se zove age i ima vrednost 25

console.log(trainer);

/////////////////////////////////////////

let car = {
  model: "Skoda Superb",
  color: "Black",
  year: 2016,
  fuel: "dizel",
  fuelConsumption: 7,
  howMuchFuel: function (distance) {
    return (distance / 100) * this.fuelConsumption;
  },
};

console.log(car.howMuchFuel(500));

//////////////////////////////////////////

let btn = document.getElementById("btn");
let list = document.getElementById("list");

let niz = [];

function saveStudent() {
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;
  let age = document.getElementById("age").value;

  let student = {
    name: fName,
    lastName: lName,
    age: age,
  };

  niz.push(student);

  list.innerHTML = ''

  for (let i = 0; i < niz.length; i++) {
    list.innerHTML += 
    '<li>Name:' + niz[i].name + ', Last Name: ' + niz[i].lastName
    + ', Age: ' + niz[i].age + '</li>'
  }
}

btn.addEventListener("click", saveStudent);
