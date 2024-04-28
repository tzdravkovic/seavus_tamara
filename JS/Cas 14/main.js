// let dozvoljeno = 21

// if (dozvoljeno >= 21) {
//     console.log('Mozete uci u klub')
// } else {
//     console.log('Nemate dovoljno godina, ne mozete uci u klub')
// }

// let kraljKarta = 100

// if (kraljKarta < 100) {
//     console.log('Nemate dovoljno godina da bi ste dobili kraljevsku kartu')
// } else if (kraljKarta > 100) {
//     console.log('Vi vec imate jednu kraljevsku kartu')
// } else {
//     console.log('Cestitam, dobili ste kraljevsku kartu!')
// }

//  for (let i = 10; i >= 1; i--) {
//     console.log(i)
//  }



//  function sabiranje( broj1, broj2, broj3 ) {          //parametar funkcije
//    console.log (broj1) 
//    console.log (broj2) 
//    console.log (broj3)                                      
//    return broj1 * broj2                       //reference na parametre
//  }

//  let a = (sabiranje(2,5))                     //argumenti

//  console.log(a)



//  function sum(num1, num2 ) {
    
//     if (num2 === undefined) {
//         return num1+num1
//     }
//     return num1 + num2
//  }

//   let b = sum(2, 15)

//   console.log(b)



// function sumZbir( a, b ) {
//     return a + b
// }


// function calcFoodTotal( food, tip){

//     let tipPercentage = tip / 100

//     let tipAmount = food * tipPercentage

//     let total = sumZbir(food, tipAmount)

//     return total
// }

// let r = calcFoodTotal(10, 20)

// console.log(r)




// function email (email) {
//     return email

// }

// let posta = email('tzdravkovic@gmail.com')
// console.log(posta)



// function samo(email)  {
//     return email.slice(0, email.indexOf('@'))
// }

// let tamara = samo('tzdravkovic@gmail.com')
// console.log(tamara)



let bane = function  (a) {         //anonimna funkcija
    return a
}

console.log(bane('Pozdrav ljudi!'))





// let samo = function (email) {
//     return email.slice(0, email.indexOf('@'))
// }

// console.log (samo('tzdravkovic@gmail.com'))



let g = (email) => {                 //arow funkcija    
    email
}                                         

console.log(g('aca.com'))



