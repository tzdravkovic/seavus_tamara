// let niz = [1, 'Aca', 'Mica', 15, 18]

// function niz1() {
//     for(let i = 0; i < niz.length; i++)
//     console.log(niz[i])
// }

// niz1()

let niz = [1, 'Aca', 'Mica', 15, 18]

let vratiNiz = (param) => {
    let result = []
    for(let i = 0; i < param.length; i++) {
        result.push(param[i])
    }
    return result
}

console.log(vratiNiz(niz))


let vratiNiz1 = (param1) => {
    let items = []
    for(const a of param1) {
        items.push(a)
    }
    return items
}

console.log(vratiNiz1(niz))




let niz1 = [1,2,105,3,4,5,6] 

// let filterBrojeva = (param1, param2) => {
//     let rezultat = []
//     for(let a = 0; a < param1.length; a++) {
//         if(param1[a] > param2) {
//             rezultat.push(param1[a])
//         }
//     }

//     return rezultat
// }

// console.log(filterBrojeva(niz1, 3))

console.log(niz1.filter((param)=> param > 3))

//HIGHT ORDER FUNCTION 



let items = [
    {name: 'Bicikla', kosta: 150},
    {name: 'Brod', kosta: 1500},
    {name: 'Kompjuter', kosta: 500},
    {name: 'Telefon', kosta: 350},
    {name: 'Tastatura', kosta: 80}
]

// console.log(items)

// let a = items.filter((item) => {
//     return item.kosta >= 500
// })

// console.log(a)



// items.forEach((item) => {
//     console.log(item.kosta)
// })


// let double = (brojevi) => {
//     return brojevi.map((num => num *2))
// }

// console.log(double([1,2,3]))


let a = items.map((item) => {
    return item.kosta 
})

console.log(a)



function konvertovanje(param) {
    let sec = param * 60
    console.log(sec)
}

konvertovanje(5)



// let items = [
//     {name: 'Bicikla', kosta: 150},
//     {name: 'Brod', kosta: 1500},
//     {name: 'Kompjuter', kosta: 500},
//     {name: 'Telefon', kosta: 350},
//     {name: 'Tastatura', kosta: 80}
// ]

// let b = items.some((item) => {
//     return item.kosta <= 150
// })

// console.log(b)


let c = items.every((item) => {
    return item.kosta <= 1500
})

console.log(c)


// let a = items.find((item) => {
//     return item.name === 'Brod'
// })

// console.log(a)

