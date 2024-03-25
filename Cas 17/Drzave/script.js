// const countryCall = (countryCode) => {
//   fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
//     .then((countryResponse) => {
//       return countryResponse.json();
//     })
//     .then((countryObjectArray) => {
//       const countryObject = countryObjectArray[0];
//       console.log("Country:\n\n", countryObject);

//       fetchNeighbourCountries(countryObject);
//     })
//     .catch((error) => {
//       console.error(`No country ${countryCode}`, error);
//     });
// };

// const fetchNeighbourCountries = (countryObject) => {
//   fetch(
//     `https://restcountries.com/v3.1/alpha?codes=${countryObject.borders.toString()}`
//   )
//     .then((neighboursResponse) => {
//       return neighboursResponse.json();
//     })
//     .then((neighboursArray) => {
//       console.log("Neighbours\n\n", neighboursArray);
//     })
//     .catch((error) => console.error(error));
// };

// countryCall("mkd");



// const student = {
//   id: 1001,
//   name: 'Alice',
//   age: 20,
//   address: {
//     street: '456 Elm St',
//     city: 'Somewhere',
//     country: 'USA'
//   },
//   grades: {
//     math: 90,
//     science: 85,
//     history: 95
//   }
// };

// const {
//   name,
//   age = 25,
//   address: {
//     city = 'Nis'
//   }
// } = student

// console.log(`${name}, ${age}, ${city}`);

// ///////
// const book = {
//   title: 'The Great Getsby',
//   author: 'F. Scott Fitzgerald',
//   publicationYear: 1925,
//   genre: 'Fiction',
//   ratings: {
//     goodreads: 4.0,
//     amazon: 4.5,
//     barnesAndNobel: 4.2 
//   }
// }

// const {
//   ratings: {
//     goodreads,
//     amazon,
//     barnesAndNobel
//   }
// } = book

// const average = (goodreads + amazon + barnesAndNobel) / 3;
// console.log(average.toFixed(2));

// /////

// const studentSubjects = ['Math', 'Science', 'History'];
// const studentGrades = [90, 85, 95];
 
// const [subject1, subject2, subject3] = studentSubjects
// const [grade1, grade2, grade3] = studentGrades

// console.log(`${subject1} - ${grade1}`)
// console.log(`${subject2} - ${grade2}`)
// console.log(`${subject3} - ${grade3}`)


/////

function Car(brand, model, year, price) {
  this.brand = brand || '---'
  this.model = model || '---'
  this.year = Number(year) || 0
  this.price = Number(price) || 0
  this.owners = []

  this.displayOwners = function() {
    if(this.owners.length) {
      console.log('Owners: ')
      this.owners.forEach(element => {
        console.log(element.fullName)
      });
    }else {
      console.log('This car is brand new - no previous owners')
    }
  }

  this.displayDetails = function() {
    console.log(`${this.brand} ${this.model}`)
    console.log(`Year: ${this.year}`)
    console.log(`Price: ${this.price} EUR`)
    this.displayOwners()
  }

    this.addOwner = function(id, fullName ) {
      this.owners.push({id, fullName})
    }
  }




const car1 = new Car("VW", "Golf VII", 2019, 15000);
const car2 = new Car("Audi", "A3", "2022", 24000);
 
const person1 = {
  id: 1,
  fullName: "Aida Pirusic",
  age: 12,
  favFood: ["chocolate", "water"],
};
 
const person2 = {
  id: 2,
  fullName: "Miroslav Popovic",
  age: 12,
  favFood: ["meat", "orange"],
};
 
const person3 = {
  id: 3,
  fullName: "Almir Vuk",
  age: 12,
  favFood: ["carrot", "water"],
};

car1.addOwner(person1);
car1.addOwner(person2);
car1.addOwner(person3);

car1.displayDetails();
console.log('\n');
car2.displayDetails();

