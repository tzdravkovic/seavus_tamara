// function validateEmale(emale){
//     return emale.includes('@')
// }

// console.log(validateEmale('tzdravkovic1999@gmail.com'))



// const validateEmale2 = (email) => {
//     return email.includes('@')
// }

// console.log(validateEmale2('tzdravkovic1999gmail.com'))



// const validateEmale3 = (email) => email.includes('@')

// console.log(validateEmale3('tzdravkovic1999@gmail.com'))



// const brojCifara = (broj) => broj.toString().length


// const paranNeaparan = (broj) => {
//     let rezultat = 'paran'
//     if(broj % 2 === 0) {
//         rezultat ='paran'
//     }else {
//         rezultat = 'neparan'
//     }
//     return rezultat
// }


// const pozitivanNegativan = (broj) => {
//     rezultat = 'pozitivan'
//     if(broj > 0) {
//         rezultat = 'pozitivan'
//     }else if(broj < 0) {
//         rezultat = 'negativan'
//     }else { rezultat = 'Uneli ste broj 0'}
//     return rezultat
// }



// const glavnaFunkcija = (broj) =>  {
    
// }

// console.log()






//ZADATAK 2

const dugme = document.getElementById('dugme')
const velicina = document.getElementById('velicina')
const boja = document.getElementById('boja')
const naslov = document.getElementById('naslov')



const bojaTeksta = (element, boja) => {
    element.style.color = boja || 'black';
}

const velicinaTeksta = (element, velicina) => {
    element.style.fontSize = `${velicina}px` || '24px';
}

dugme.addEventListener('click', () => {
    velicinaTeksta(naslov, velicina.value);
    bojaTeksta(naslov, boja.value);
})