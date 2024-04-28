// let dugme = document.querySelector('#click')
// let dugme1 = document.querySelector('#mouse-btn')


// dugme.addEventListener('click', () => {
//     alert('Kliknuo sam na dugme')
// })

// let paramFn = () => {
//     alert('Kliknuo sam na dugme')
// }

// dugme.addEventListener('click', paramFn)


// dugme1.addEventListener('mouseout', (event) => {
//     event.target.style.backgroundColor = 'lightblue'
// })

// let mouseFn = (e) => {
//     e.style.backgroundColor = 'lightblue'
// }

// dugme1.addEventListener('mouseout', mouseFn)



// let actionBtn = document.querySelector('#action')

// let container = document.querySelector('.container')
// let firstElementDiv = document.querySelector('.container > div')
// let firstP = document.querySelector('.container > p')


// actionBtn.onclick = () => {
//     let div2 = document.createElement('div')
//     let div2_text = document.createTextNode('Ja sam novi div element')

//     div2.innerHTML = '<h3>Novi element</h3>'

//     div2.appendChild(div2_text)
    
//     // container.insertBefore(div2, firstElementDiv)
//     container.replaceChild(div2, firstElementDiv)
// }

// firstP.addEventListener('click', (e) => {
//     e.target.remove()
// })


// let cont = document.querySelector('.container')

// let treca = cont.querySelector('.lista').
// querySelector('li:nth-child(3)')

// let lista = document.querySelector('.lista')

// console.log(treca)

// console.log(treca.innerText)
// console.log(cont.childElementCount)
// console.log(cont.childNodes)
// console.log(cont.children)

// console.log(lista.childElementCount)
// console.log(lista.childNodes)
// console.log(lista.children)
// console.log(lista.children[4])
// console.log(lista.children[4].textContent)
// console.log(lista.children[1].previousElementSibling)


// lista.children[1].previousElementSibling.style.color = "red"
// console.log(lista.children[1].nextElementSibling)
// lista.children[1].nextElementSibling.style.color = "blue"
// lista.children[5].nextElementSibling.style.color = "green"
// console.log(lista.children[6])
// console.log(lista.children[6].parentNode)
// console.log(lista.children[6].parentElement)
// lista.children[6].parentElement.style.backgroundColor = "pink"
// console.log(lista.children[6].parentElement.parentElement)



//DESTRUKTURA

// const alfabet = ['A', 'B', 'C', 'D', 'E', 'F']
// const brojevi = ['1', '2', '3', '4', '5', '6']

// const [a,, c, ...rest] = alfabet


// console.log(a)
// console.log(c)
// console.log(rest)

// const noviNiz = [...alfabet, ...brojevi]

// console.log(noviNiz)

// const [a,, c] = alfabet

// console.log(a)
// console.log(b)
// console.log(c)



// const a = alfabet[0]

// console.log(a)

// const b = brojevi[1]

// console.log(b)


function sabiranjeIMnozenje (a, b) {
    return [a + b, a * b]
}

const niz = sabiranjeIMnozenje(2, 3)
console.log(niz)


function sab(a, b) {
    return [a + b, a * b, a / b]
}

const [sabiranje, mnozenje, deljenje = 'Nema rezultata'] = sab(2, 3)
console.log(sabiranje)
console.log(mnozenje)
console.log(deljenje)



const person = {
    name: 'Branka',
    age: 24,
    // omiljenaHrana: 'Pljeskavica',
    address: {
        city: 'Nis',
        country: 'Serbia'
    }
}

// const {name: ime = 'Marko', age: godine, omiljenaHrana = 'Pica'} = person
// console.log(ime)
// console.log(godine)
// console.log(omiljenaHrana)


// const {name: ime, ...ostatak} = person
// console.log(ime)
// console.log(ostatak)


// const {name: ime, address: {city}} = person
// console.log(city)


const person1 = {
    age: 50,
    omiljenaHrana: 'Pasulj'
}

const personNew = {...person, ...person1}
console.log(personNew)

function printUser(user) {
    // console.log(user)
    return user
}

// printUser(person)

let a = printUser(person)


function stampajUser(user) {
    console.log(`Ime je: ${user.name}. Godine su: ${user.age}`)
}

stampajUser(person)


function printPerson({name, age, omiljenaHrana = 'Lubenica'}) {
    console.log(`Ime je: ${name}. Godine su: ${age}. Omiljena hrana je: ${omiljenaHrana}`)
}

printPerson(person)