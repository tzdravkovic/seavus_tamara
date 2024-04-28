//VAR, LET, CONST


// let x = 2
// x = 5

// console.log(x)


// var x = 2
// var x = 5

// console.log(x)

// const r = 10

// console.log(r)


//GLOBAL SCOPE

// var x = 1
// let y = 2
// const z = 3




//LOCAL SCOPE / PRIVATE SCOPE
// {
//     let y = 4
//     console.log(y)
// }


// let y = 18


//LOCAL SCOPE 
// function myFunct() {
//     // let y = 5
//     const z = 10
//     console.log(y)

//     {
//         let y = 4
//         console.log(y)
//     }
// }
// myFunct()

// console.log(y)
// console.log(z)







// var x = 1
// let y = 2
// const z = 3


// console.log(`Global scope: ${x}`)
// console.log(`Global scope: ${y}`)
// console.log(`Global scope: ${z}`)


// function myFunc() {
//     var x = 10 
//     const z = 5
    
//     {
//         var x = 11
//         const z = 6
//         console.log(`Block scope: ${x}`)
//         console.log(`Block scope: ${y}`)
//         console.log(`Block scope: ${z}`)
//     }

//     console.log(`Function scope: ${x}`)
//     console.log(`Function scope: ${y}`)
//     console.log(`Function scope: ${z}`)

// }

// myFunc()


// let niz = [
//         "Preuzmi moj klon", 
//         "Tu je moj klon koda", 
//         "Opet sam podigao moj portFolio"
// ]

// console.log(niz[2])  
// console.log(niz.length) 

// let opis = [
//     "Tamara Zdravkovic",
//     23,
//     "Palacinke",
//     false
// ]


// let karte = [7, 4]
// karte.unshift(2)
// console.log(karte)

// let recenica = ['Kako si?', 'Sta radis?']
// recenica.push('Gde si bio juce?')
// console.log(recenica)


// let imena = ['Aca', 'Jovan', 'Igor']
// imena.pop()
// console.log(imena)


// let aca = 20

// for(counter = 1; counter <= aca; counter += 2) {
//     console.log(counter)
// }

// let tamara = 100

// for(brojac = 10; brojac <= tamara; brojac += 10) {
//     console.log(brojac)
// }

// let poruke = ['Aca', 'Branka', 'Bane', 'Igor', 'Tamara', 'Jovan']

// for(x = 0; x < poruke.length; x++) {
//     console.log(poruke[x])
// }

// let niz = [5,58,56,69,65]

// for(y = 0; y < niz.length; y++) {
//     console.log(niz[y])
// }





// let aca = [7, 8, 9]

// for(brojac = 0; brojac < aca.length; brojac++) {
//     console.log(aca[brojac])
// }


// let recenice = ["Dobar dan", "Dobro jutro", "Dobro vece"]

// for(i = 0; i < recenice.length; i++) {
//     console.log(recenice[i])
// }

// let recenicaEl = document.getElementById('recenica')

// let recenica = ['Dobar dan', 'moje', 'ime', 'je', 'Tamara']

// for(i = 0; i < recenica.length; i++) {
//     recenicaEl.innerHTML += recenica[i] + ' '
// }




   

//IGRICA


// let godine = false
// let karta = true

// if(godine === false || karta === true ) {
//     gledaj()

// }else {
//     console.log('Ne mozes da udjes u biosokop')
// }


// function gledaj() {
//     console.log('Mozes da udjes u bioskop')
// }







// let zavrsenKurs = true
// let dobitiSetifikat = true


// if(zavrsenKurs === true || dobitiSetifikat === true) {
//     generisi()
// } else {
//     console.log('Nije dobio sertifikat')
// }



// if(zavrsenKurs === true) {
//     if(dobitiSetifikat === true) {
//         generisi()
//     } else {
//         console.log('Nije zasluzio sertifikat')
//     }
// }

// function generisi() {
//     console.log('Sertifikat je generisan')
// }








let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false

let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    if (sum < 21) {
        message = 'Da li zelis da vuces novu kartu?'
    }else if (sum === 21) {
        message = 'WOW, dobio si BlackJack!'
        hasBlackJack = true
    }else {
        message = 'Ispao si iz igre'
        isAlive =  false
    }
    messageEl.innerHTML = message
    sumEl.innerHTML = 'Suma: ' + sum
    cardEl.innerHTML = 'Karte: '
    for(i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    // cardEl.innerHTML = `Karte: ${cards[0]},  ${cards[1]}`

}


function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum > 10) {
        return 10
    }else if(randomNum === 1) {
        return 11 
    }else {
        return randomNum
    }
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log('Aca')
        renderGame()
    }
}




                            //OBJEKTI

//  let playerEl = document.getElementById('player-el')

// // let playerName = 'Pera'
// // let playerChips = $145
                            
// let player = {
// playerName: 'Pera', 
// playerChips: 145
// }

//  playerEl.textContent = player.playerName + ': $' + player.playerChips

// let kartica = {
//     title: 'Naucite JS',
//     lekcije: 60,
//     duzina: 90,
//     autor: 'Aleksandar Kostic',
//     nivo: 2,
//     isFree: false,
//     tagovi: ['html, css']
// }

// console.log(kartica.tagovi)


// let vittorioVeneto = {
//     title: 'A whole medieval castle for you',
//     priceNight: 409,
//     images: ["slike/zamak1.jpg, slike/zamak2.jpg"],
//     isSuportGuest: true
// }

// console.log(vittorioVeneto['images'])




// let primer = (name, color) => {
//     let person = {
//         name: name,
//         color: color
//     }

//     let recenica  = `Pozdrav ${person.name} imas lepu ${person.color} kosulju`
//     return recenica
// }

// console.log(primer('Tamara', 'plava'))




// let niz = []

// let j = 1

// while(j <= 5) {
//     niz.push(j)
//     j++
// }

// console.log(niz)


// let niz1 = []

// for (brojac = 1; brojac <= 5; brojac++) {
//     niz1.push(brojac)
// }

// console.log(niz1)


// let niz2 = []

// for (b = 2; b <= 10; b += 2) {
//     niz2.push(b)
// }

// console.log(niz2)


// let niz3 = []

// for (let c = 1; c <= 10; c += 2) {
//     niz3.push(c)
// }

// console.log(niz3)


// let niz4 = []

// for (let count = 10; count >= 2; count -= 2) {
//     niz4.push(count)
// }

// console.log(niz4)


// let number = Math.floor(Math.random() * 6) + 1

// function rollDisk() {
//     return number
// }

// console.log(rollDisk())


// let plivac1 = 200
// let plivac2 = 300

// function najboljeVreme() {

//     if(plivac1 > plivac2) {
//         return plivac2 + ' ' + 'Plivac2 je pobedio'
//     } else if(plivac1 < plivac2) {
//         return plivac1 + ' ' + 'Plivac1 je pobedio'
//     }else {
//         return plivac1 + ' ' + 'Nereseno'
//     }
// }

// console.log(najboljeVreme())


// function totalnoVreme() {
//     return plivac1 + plivac2
// }

// console.log(totalnoVreme())

// let voce = 'Ana voli Milovana'

// for (let a in voce) {
//     console.log(a)
// }


// let recenica = (rec) => {
//     let rez
//     for (let c in rec) {
//         console.log(c)
//     }
// }

// recenica('Ana voli Milovana')




// for (brojac = 0; brojac < voce.length; brojac++) {
//     console.log(voce[brojac])
// }

// for (const cicaGlisa of voce) {
//     console.log(cicaGlisa)
// }



// let aca = [1, 2, 3, 4, 5]
// let rezultat = []

// for (brojac = 0; brojac < aca.length; brojac++) {
//     rezultat.push(aca[brojac] * 2)   
// }

// console.log(rezultat)

// for (let brojevi of aca) {
//     console.log(brojevi)
// }


// function double(parametar) {
//     let rezultat = []
//     for (let r = 0; r < parametar.length; r++) {
//         rezultat.push(parametar[r] * 3)
//     }

//     return rezultat
// }

// let a = double([5, 22, 15, 58])
// console.log(a)


// function double(parametar) {
//     let rezultat = []
//     for (let brojevi of parametar) {
//         rezultat.push(brojevi * 3)
//     }

//     return rezultat
// }

// let a = double([5, 22, 15, 58])
// console.log(a)



// const kolikoSlova = (param) => {
//     let rezultat = 0
//     for (const slovo in param) {
//         // console.log(Number(slovo) + 1)
//         rezultat = Number(slovo) + 1
//     }
//     return rezultat
// }
// const fraza = prompt('Unesi recenicu')

// let a = kolikoSlova(fraza)
// console.log(a)



// const sumaNiza = (param) => {
//     let rezultat = 0
//     for(const protocno of param) {
//         // rezultat = rezultat + protocno
//         rezultat += protocno
//     }
//     return {rezultat}
// }

// const niz = [1, 5, 3, 4]

// let a = sumaNiza(niz)
// console.log(a)


// function sabiranje(props) {
//     let rezultat = 0
//     for(let i = 0; i < props.length; i++) {
//         for(let j = 0; j < props[i].length; j++){
//             // console.log(props[i][j])
//             rezultat = rezultat + props[i][j]
//         }
//     }
//     return rezultat
// }

// let niz = [[1,9], [3,4], [5,6,7]]

// let a = sabiranje(niz)
// console.log(a)




// function sabiranje(props) {
//     let rezultat = 1
//     for(let i = 0; i < props.length; i++) {
//         for(let j = 0; j < props[i].length; j++){
//             // console.log(props[i][j])
//             // rezultat = rezultat * props[i][j]
//             rezultat *= props[i][j]
//         }
//     }
//     return rezultat
// }

// let niz = [[1,9], [3,4], [5,6,7]]

// let a = sabiranje(niz)
// console.log(a)



// let person = {
//     name: 'Pera',
//     novac: 200
// }

// // console.log('Moje ime je ' + person.name)
// console.log(`Moje ime je ${person.name} i imam ${person.novac} evra`)


// let garaza = {
//     'auto': {
//         'inside': {
//             'box za rukavice': 'mape',
//             'putnicka sedista' : 'kozna'
//         },
//         'outside': {
//             'gepek': 'jaknu'
//         }
//     }

// }

// let a = 'U autu imam gepek za ' + garaza.auto.outside.gepek
// console.log(a)


// let b = 'U autu imam ' + garaza.auto.inside["putnicka sedista"] + ' sedista'
// console.log(b)




// let mojeBiljke = [
//     {
//         tip: 'cvece', 
//         vrste: ['ruze', 'orhideje', 'lale']
//     },
//     {
//         tip: 'drvece',
//         vrste: ['zimzeleno', 'listopadno', 'topola']
//     }
//     ]

//     let nesto = mojeBiljke[1].vrste[1]
//     console.log(nesto)


//     let pristup = mojeBiljke[0].vrste[2]
//     console.log(pristup)



                    ///metode objekta

// let person = {
//     name: 'Pera',
//     lname: 'Peric',
//     kaziZdravo: function(){
//         console.log('Pozdrav!')
//     }
// }

// person.kaziZdravo()

// Math.random
// document.getElementById




let person = {
    name: 'Milos',
    age: 30,
    country: 'Norveska',
    logData: function(){
        console.log('Milos ima 30 godina i on je iz Norveske')
    }
}

person.logData()


let godine = 18

if (godine <= 6) {
    console.log('Free')
}else if (godine > 6 && godine <= 17) {
    console.log('Popust za dete')
}else if (godine >= 18 && godine <= 26) {
    console.log('Studentski popust')
}else if (godine >=27 && godine <= 66) {
    console.log('Puna cena')
}else {
    console.log('Senior gradjanski popust')
}



let drzave = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']

for (let i = 0; i < drzave.length; i++) {
    console.log("- ", drzave[i])
}



let drzava = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monako']

drzava.pop()
drzava.shift()

drzava.push('Pakistan')
drzava.unshift('China')

console.log(drzava)




let dayOfMonth = true
let weekday = true 

if (dayOfMonth === true && weekday === true) {
    console.log("SPOOKY FACE")
}


let igrica = ['papir', 'kamen', 'makaze']

let a = Math.floor(Math.random() * igrica.length) 
console.log(igrica[a])



let voce = ['jabuka', 'narandza', 'jabuka', 'jabuka', 'narandza']
let narandze = []
let jabuke = []

let narandzeEl = document.getElementById('narandzeEl')
let jabukeEl = document.getElementById('jabukeEl')

function sortFruit() {
    for(let i = 0; i < voce.length; i++) {
        if(voce[i] === 'narandza') {
            narandze.push(voce[i])
        }else {
            jabuke.push(voce[i])
        }
    }
    narandzeEl.textContent = narandze
    jabukeEl.textContent = jabuke
}

sortFruit()



// let voce = ['jabuka', 'kruska', 'jabuka', 'kruska', 'kruska']

// let jabuke = document.getElementById('jabuke')
// let kruske = document.getElementById('kruske')


// function sortirajVoce() {
//     for(let i = 0; i < voce.length; i++) {
//         if(voce[i] === 'jabuka') {
//             jabuke.textContent += ' jabuka'
//         }else if(voce[i] === 'kruska') {
//             kruske.textContent += ' kruska'
//         }
//     }
// }

// sortirajVoce()