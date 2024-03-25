let firstDiv = document.getElementById('first')
let allP = document.querySelectorAll('p')
let divs = document.querySelectorAll('div')
let lastDiv = divs[divs.length-1]

let h1InLastDiv = lastDiv.firstElementChild
console.log(h1InLastDiv)
let h3LastDiv = lastDiv.lastElementChild
console.log(h3LastDiv)

let anotherDivP = document.querySelector('.anotherDiv p')

console.log(anotherDivP)

let anotherDivT = document.querySelector('.anotherDiv text')
anotherDivT.innerHTML += ' text'

console.log(anotherDivT.innerHTML)

