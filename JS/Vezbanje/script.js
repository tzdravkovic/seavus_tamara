// let broj = prompt("Unesite broj")
// let broj1 = parseInt(broj)
// console.log(typeof broj1)

// let tekst = prompt("Unesite svoje ime")
// console.log(typeof tekst)

// let bool = prompt("Unesite true ili false")
// console.log(bool === "true")

// let niz = prompt("Unesite niz brojeva")

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const btn = document.getElementById("dugme");
const input = document.getElementById("firstName");

console.log(input);

btn.onclick = function () {
  console.log(input.value);
};

let niz = [1, 2, 3];

for (let i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}

for (let i of niz) {
  console.log(i);
}
