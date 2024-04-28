/ / let a = document.getElementById('recenica')
// let rec1 = 'Kontejneri'
// let rec2 = 'nisu'
// let rec3 = 'izbaceni'
// let recenica = rec1 + " " + rec2 + " " + rec3

// console.log(recenica)

// a.innerHTML = recenica
// // document.getElementById('recenica') .innerHTML = recenica
 
let myNumber = 45
let myNumber1 = 45.0
let myString = '45'

console.log(typeof myString)

console.log(myNumber === Number(myString)) //konvertovanje stringa u number

console.log( typeof Number(myString))

let text = 'Kazablanka'

// console.log(Number(text))


let num = 45
let num1 = 45.01
let num2 = '45'

console.log(Number.isInteger(num))
console.log(Number.isInteger(num2))


let num5 = '45.123abc'

console.log( Number.parseFloat('45.258abcd').toFixed(2)) //zaokruzivanje decimalnih brojeva
// console.log( Number.parseInt(num5))

console.log(Number.isNaN('Aca'))
console.log(isNaN('Aca'))
console.log(isNaN( 50 ))



console.log(Math.PI)

console.log(Math.trunc(Math.PI)) //vraca samo cele brojeve odnosno intedzer
console.log(Math.round(Math.PI))
console.log(Math.round(3.4))
console.log(Math.round(3.5))


console.log(Math.ceil(3.1)) //zaokruzivanje na veci broj
console.log(Math.floor(2.9)) //zaokruzivanje na manji broj

console.log(Math.pow(2, 4)) //2 na cetvrti

console.log(Math.min(2,7,12,8,23,60))
console.log(Math.max(125,1,66,342,987,4))

let maxNum = Math.max(125,1,66,342,987,4)
console.log(maxNum)

console.log(Math.random()) //vraca brojeve izmedju 0 i 1