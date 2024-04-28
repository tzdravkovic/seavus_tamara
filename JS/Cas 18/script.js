// const course = {
//     title: "Advanced JavaScript",
//     maxStudents: 10,
//     numOfClasses: 15,
//     starting: '20.02.2024.',
//     ending: '28.03.2024.',
//     price: {
//       value: 1000,
//       currency: "EUR",
//     },
//     teachers: ["Aida", "Miroslav", "Almir"],
//   };

//   const academy = {
//     title,
//     price: {
//       value = 'unknown',
//       currency = 'unknown'
//     }
//   } = course

//   console.log(`${title}, ${value} ${currency}`)

/////////////////

// function Book(title, author, year) {
//   this.title = title || "---";
//   this.author = author || "---";
//   this.year = Number(year);
//   this.ratings = [];
//   this.addRating = (rating) => {
//     const smallRating = ({ user = "unknown", grade, comment = "" } = rating);

//     this.ratings.push(smallRating);
//   };

//   this.getAverageRating = () => {
//     let sum = 0;
//     this.ratings.forEach((rating) => {
//       sum += rating.grade;
//     });
//     let average = sum / this.ratings.length;
//     return average;
//   };

//   this.displayDetails = () => {
//     console.log(`${this.title} - ${this.author} Year: ${this.year}`);
//     if (!this.ratings.length) {
//       console.log(
//         `Book doesn't have ratings yet. Be the first one to add rating!`
//       );
//     } else {
//       console.log(`Average rating: ${this.getAverageRating()}`);
//     }
//   };

//   this.displayRatings = () => {
//     this.ratings.forEach((rating) => {
//       console.log(rating);
//     });
//   };
// }

// const rating1 = {
//   grade: 5,
//   user: "john",
//   comment:
//     "I love it! It was exactly what I was looking for! Now my Harry Potter collection is more complete then ever before",
//   title: "Awesome!",
//   id: 12,
//   userId: 1,
//   userEmail: "john@john.com",
//   isVerified: true,
// };

// const rating2 = {
//   grade: 4,
//   user: "ana",
//   comment:
//     "This (the first in the series), or any other Harry Potter book for that matter, needs no introduction. Once you've followed Harry to Hogworts and back during his first term, you'll be coming back for more time and time again!",
//   title: "A great escape!",
//   id: 10,
//   userId: 2,
//   userEmail: "ana@ana.com",
//   isVerified: true,
// };

// const rating3 = {
//   grade: 3,
//   user: "tom",
//   comment: "Pages missing from my copy of the book.",
//   title: "Missing pages",
//   id: 11,
//   userId: 3,
//   userEmail: "tom@tom.com",
//   isVerified: true,
// };

// const book = new Book(
//   "Harry Potter and the Philosopher's Stone",
//   "J. K. Rowling",
//   "1997"
// );

// book.addRating(rating1);
// book.addRating(rating2);
// book.addRating(rating3);

// book.displayDetails();
// book.displayRatings();

// console.log("\n");
// const book2 = new Book("Atomic Habits", "James Clear", "2018");
// book2.displayDetails();

//////////////////

const btn = document.getElementById("factButton");
const text = document.getElementById("fact-text");
const img = document.getElementById("fact-img");

btn.addEventListener("click", () => {
  fetch("https://meowfacts.herokuapp.com/")
    .then((result) => result.json())
    .then((jsObject) => {
      const fact = jsObject.data[0];
          fetch("https://random.dog/woof.json")
            .then((result) => result.json())
            .then((imageObject) => {
              const url = imageObject.url;
              text.innerText = fact
              img.src = url
            })
            .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
});
