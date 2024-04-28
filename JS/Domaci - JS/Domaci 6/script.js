// function paranNeparan(niz, tip) {
//   let niz1 = []
//   if (tip === "paran") {
//     for (let i = 0; i < niz.length; i++) {
//       if (niz[i] % 2 === 0) {
//         niz1.push(niz[i]);
//       }
//     }
//   } else if (tip === 'neparan') {
//     for (let i = 0; i < niz.length; i++) {
//       if (niz[i] % 2 !== 0) {
//         niz1.push(niz[i]);
//       }
//     }
//   } else {
//     console.error('Mozete uneti samo reci paran ili neparan')
//   }
//   return niz1
// }

// let rezultat = paranNeparan([2,3,8,4,9], 'bla')
// console.log(rezultat)

/////////////////////////////////////////////////

// let recenica = ""

// function createSentence(niz) {
//   for(let i = 0; i < niz.length; i++) {
//       recenica = recenica + niz[i]
//   }
//   return recenica
// }

// let nizStringova = createSentence(["Cao ", "ja ", "sam ", "Tamara"])

//  console.log(nizStringova)

////////////////////////////////////////////////

// function najveciNamjmanjiBroj(niz) {
//   let najveciBroj = niz[0];
//   let najmanjiBroj = niz[0];

//   for (let i = 1; i < niz.length; i++) {
//     if (niz[i] > najveciBroj) {
//       najveciBroj = niz[i];
//     }

//     if (niz[i] < najmanjiBroj) {
//       najmanjiBroj = niz[i];
//     }
//   }
//   let zbir = najveciBroj + najmanjiBroj;
//   return zbir;
// }

// let rezultat = najveciNamjmanjiBroj([5, 8, 1, 6, 3, 10]);

// console.log(rezultat);

////////////////////////////////////////////////

// function nizovi(fName, lName) {
//   let imeiPrezime = [];

//   if (fName.length !== lName.length) {
//     console.log('Sve si usrao')
//     return
//   }

//   for (let i = 0; i < fName.length; i++) {
//     let name = fName[i];
//     let lastName = lName[i];
//     imeiPrezime.push((i + 1)  + '. ' + name + ' ' + lastName);
//   }
//   return imeiPrezime;
// }

// let spajanje = nizovi(["Tamara", "Marko"], ["Zdravkovic", "Ilic"]);

// console.log(spajanje);

/////////////////////////////////////////////////

let tekst = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    tekst = tekst + i + "\n";
  } else {
    tekst = tekst + i + " ";
  }
}

console.log(tekst);
