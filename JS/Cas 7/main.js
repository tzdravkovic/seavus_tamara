// function zbir() {
//     let a = 20
//     let b = 40
//     let c = 60
//     let sabiranje = a + b + c
//     console.log(sabiranje)
// }

// zbir()

// function primer() {
//     b = 15
// }
// primer()
// console.log(b) //globalno

// function primer() {
//    let b = 15
//    console.log(b) //privatno, lokalni
// }
// primer() 

//SKOUP

// let putnik = 0


// function putnici() {
//     putnik = putnik + 1
// }

// putnici()
// putnici()
// putnici()

// console.log(putnik)
// let a = document.getElementById('recenica')
// let string = "Aca voli"
// let string1 = "da jede pitu"
// let recenica = string + " " + string1

// console.log(recenica)

// a.innerHTML = recenica + " i pije jogurt"

const counterEl = document.getElementById('counter')
const saveEL = document.getElementById('save-el')

let putnik = 0

function putnici() {
    putnik++
    console.log(putnik)
    counterEl.innerHTML = putnik
}


function save() {
    let countStr = putnik + " - "
    saveEL.innerText += countStr
    counterEl.textContent = 0
    putnik = 0

}

save()

// let firstName = 'Tamara'
// let lastName = 'Zdravkovic'
// let fullName = firstName + " " + lastName
// console.log(fullName)


// function greeting() {
//     let name = 'Bob'
//     let greeting = 'Zdravo'
//     console.log(greeting + ", " + name)
// }

// greeting()


// let myPoints = 3

// function dodaj3() {
//     myPoints +=3
    
// }

// function obrisi1Poen() {
//     myPoints -=1
// }

// dodaj3()
// dodaj3()
// dodaj3()   

// obrisi1Poen()
// obrisi1Poen()

// console.log(myPoints)


