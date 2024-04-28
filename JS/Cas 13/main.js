//  let x = []

//  x[0] = 15
//  x[1] = 'Aca'
//  x[2] = true
// x.splice(1,1, 'Mica')

//  console.log(x)


// let niz = ['A', 'B', 'C', 'D', 'E','F']

// let noviNiz = niz.join()
// let noviNiz1 = noviNiz.split(',')

// // niz.reverse()
// // let noviNiz = niz.slice(2, 5)

// console.log(noviNiz1)



// let niz1 = ['A', 'B', 'C']
// let niz2 = ['D', 'E', 'F']

// // let x = niz2.concat(niz1)
// let x = [...niz1, ...niz2]

// let c = [niz1, niz2]

// console.log(x)

// console.log(c)



// let equiptShelfA = ['baseball', 'football', 'voleyball']
// let equiptShelfB = ['basketball', 'golf balls', 'tennis balls']

// let clothesShelfA = ['tank tops', 't-shirt', 'jerseys']
// let clothesShelfB = ['sweet tops', 'sweat pants', 'hoodies']


// console.log(equiptShelfA[1], clothesShelfB[0])

// let equiptDept = [equiptShelfA, equiptShelfB]
// let clothesDept = [clothesShelfA, clothesShelfB]

// console.log(equiptDept[0][1])
// console.log(clothesDept[1][2])

// let sportStore = [equiptDept, clothesDept]

// console.log(sportStore[0][0][1])
// console.log(sportStore[1][0][2])




// let a = []

// let i = 0

// // while (i < 5) {
// //     a.push(i)
// //     i++
// // }

// do {
//     a.push(i)
//     i++
// } while(i < 5)

// console.log(a)


//FOR PETLJA



// for (let i = 5 ; i <= 5; i++) {
//     console.log(i)
// }


// let name = 'BaneBanana'


// for (let i = 0; i < name.length; i++ ) {
//     console.log(name.charAt(i))

// }




let ime = 'BrankaFaca'
let brojac = 0
let slova 

while(true) {
    slova = ime[brojac]
    console.log(slova)

    if (slova === 'F') {
        break
    }
    brojac++
}