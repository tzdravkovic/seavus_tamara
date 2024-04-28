if(2 === '2') {
    console.log('Da, to je tacno')
} else {
    console.log('Ne, to nije tacno')
}

let vreme = 23

if (vreme >= 4 && vreme < 12) {
    console.log('DOBRO JUTRO')
} else if (vreme >= 12 && vreme < 17) {
    console.log('DOBAR DAN')
} else if (vreme >= 17 && vreme < 20) {
    console.log('DOBRO VECE')
} else {
    console.log('LAKU NOC')
}



let vreme = 23
let poruka

if (vreme >= 4 && vreme < 12) {
    poruka = 'DOBRO JUTRO'
} else if (vreme >= 12 && vreme < 17) {
   poruka = 'DOBAR DAN'
} else if (vreme >= 17 && vreme < 20) {
    poruka = 'DOBRO VECE'
} else {
    poruka = 'LAKU NOC'
}

console.log(poruka)

let name = 'Tamara'
let name2 = 'Jovan'

function ime(nesto) {
    console.log(nesto)
}

ime(name)
ime(name2)

let a = 10
let b = 15



function suma(a, b) {
     return a + b
 }
let a = suma (35, 35)
let b = suma(69, 58)
console.log(a)         //vracanje funkcije kroz promenjivu
console.log(b)


function suma(a, b) {
   let rezultat =  a + b
   console.log(rezultat)
}
console.log(suma(69, 58))


let aca = true
let odgovor

if (aca === true) {
    odgovor = 'DA'

} else {
    odgovor = 'NE'
}
 console.log(odgovor)

 drugi nacin

let aca = false

let answer = aca === true ? 'DA' : 'NE' //ternarni operator

console.log(answer)


let supa = 'Kokosja supa'
let isCustomerBanned = false

let pristup = isCustomerBanned 
    ? 'Izvini, nema supa za tebe' 
    : supa
    ?'Da, mi imamo ' + supa    `Da mi imamo ${supa}`
    : 'Nema supa danas'

console.log(pristup)


