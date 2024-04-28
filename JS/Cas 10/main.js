// let playerOne = 'papir'
// let playerTwo = 'kamen'

// if (playerOne === playerTwo) {
//     console.log('Nereseno')
// } else if (playerOne === 'kamen') {
//     if (playerTwo === 'papir') {
//         console.log ('plyerTwo je pobedio')
//     } else {
//         console.log ('playerOne je pobedio')
//     }
// } else if (playerOne === 'papir') {
//     if (playerTwo === 'makaze') {
//         console.log('PlayerTwo je pobedio')
//     } else {
//         console.log('PlayerTwo je pobedio')
//     }
// } else {
//     if (playerTwo === 'kamen') {
//         console.log('playerTwo je pobedio')
//     } else {
//         console.log('PlayerOne je pobedio')
//     }
// }



//SWITCH STATEMENT

switch (Math.floor(Math.random() * 4 + 1) ) {
    case 1: 
        console.log (1)
        break;
    case 2:
        console.log(2)
        break;
    case 3: 
        console.log('Tri')
        break;
    default: 
        console.log('Nema pogodaka!')

}

// let testScore = 81

// let ocena = (testScore > 89) 
//             ? 'A' 
//             :
//             (testScore > 79)
//             ? 'B'
//             :
//             (testScore > 69)
//             ? 'C'
//             :
//             (testScore > 59)
//             ? 'D'
//             : 'F'

// // console.log(ocena)
// console.log(`Moja ocena je ${ocena}`)



// let igrac1 = 'makaze'
// let igrac2 = 'kamen'

// let rezultat =
//     (igrac1 === igrac2)
//     ? 'Nereseno'
//     : (igrac1 === 'kamen' && igrac2 === 'papir')
//     ? 'Igrac2 je pobedio'
//     : (igrac1 === 'papir' && igrac2 === 'makaze')
//     ? 'Igrac2 je pobedio'
//     : (igrac1 === 'makaze' && igrac2 === 'kamen')
//     ? 'Igrac2 je pobedio'
//     : 'Igrac1 je pobedio'

// console.log(rezultat)


// let prom = confirm('OK === True\Cancel === False')

// console.log(prom)


// let ime = prompt('Molim vas ispisite svoje ime')
// console.log(ime)


// let prezime = prompt('Unesite vase prezime')

// console.log(prezime ?? 'Niste uneli vase prezime')   //NULIŠ OPERATOR



let name = prompt('Unesite vase ime')

if (name) {
    console.log(name)
    console.log(name.trim().length)  

} else {
    console.log('Niste uneli vase ime!')
}