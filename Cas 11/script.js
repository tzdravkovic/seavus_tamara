// const nizZaProveru = [2, 4, 1, 5, 2, 10, 7, 9];
// const duzinaNiza = nizZaProveru.length; //duzina niza
 
// console.log(nizZaProveru[2]);
 
// function naveciBrojFunkcija(nizZaProveru) {
 
//   let brojac = 0; //pomocna promenljiva za povecavanje indexa tj pozicije u nizu
//   let najveci = 0; //pomocna promenljiva za cuvanje najveceg broja
 
//   while (brojac < duzinaNiza) {
   
//     if (nizZaProveru[brojac] > najveci) {
//       najveci = nizZaProveru[brojac];
 
//     }
//     brojac++;
//   }
//   return najveci;
// }
// const najveciBroj = naveciBrojFunkcija(nizZaProveru);





// let niz = [2, 4, 1, 5, 2, 10, 7, 9]


// function saberiBrojeve(niz) {
//     let i = 0
//     let zbir = 0

//     while (i < niz.length) {
//         zbir = niz[i] + zbir
//         i++
//     }
//     console.log(zbir)
// }

// saberiBrojeve(niz)



// let nizStringova = ['Danas', 'je', 'bio', 'lep', 'dan', '!']

// let i = 0

// while(i < nizStringova.length) {
//     console.log(nizStringova[i])
//     i++
// }


// let sum = 0
// let i = 101

// while (i <= 150) {
//     sum = Math.pow(i, 2) + sum
//     i++
// }

// console.log(sum)





// let niz = [2, 5, 6, 8, 7, 9, 10]
// let niz1 = []

// function paranBroj() {
//     for(let i = 0; i < niz.length; i++) {
//         if(niz[i] % 2 === 0) {
//             console.log(niz[i])
//          }
// }
// 

// paranBroj()



// let niz2 = [5, 2, 5, 4, 5]
// let zbir = 0


// function prosek() {
//     for(let i = 0; i < niz2.length; i++) {
//       zbir = niz2[i] + zbir
//     }
//     zbir = zbir / niz2.length

//     console.log(zbir)
// }

// prosek()


//  KUCI

// let broj = 6


// function prostBroj() {
    
// }

// prostBroj()



// let brojevi = [1, 2, 5, 7, 12, 15, 9]
// let zbir = 0

// function sabiranje() {
//     for(let i = 0; i < brojevi.length; i++) {
//         if(brojevi[i] % 2 !== 0){
//                 zbir = brojevi[i] + zbir
//             }
//     }
//     console.log(zbir)
// }

// sabiranje()



// let originalniString = 'Ana voli Milovana';
// let obrnutiString = '';
// for (let i = originalniString.length - 1; i >= 0; i--) {
//   obrnutiString += originalniString[i];
// }
// console.log(obrnutiString);



// How many times is a number contained in an array
// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.
// Time to accomplish: 15 minutes.



// let niz = [1, 1, 5, 2, 1, 6, 7, 10, 5, 7]
// let brojac = 0

// function ponavljanje(broj, niz) {
//     for(let i = 0; i < niz.length; i++) {
//         if(niz[i] === broj){
//             brojac++
//         }  
//     }

//     console.log(brojac)
// }

// ponavljanje(7, niz)


// function saberi(broj1, broj2) {
//     var rezultat = broj1 + broj2;
//     return rezultat;
// }

var broj = 4;
// 2
// 3
// 4
var daLiJeBrojProst = false;
for (var i = 2; i < broj; i++) {
    if (broj % i == 0) {
        daLiJeBrojProst = false;
        break;
    } else {
        daLiJeBrojProst = true;
    }
    // Ako se uslov ispuni znaci da je broj deljiv
}
console.log(daLiJeBrojProst);

// console.log();
// console.log(broj);