let myLeads = []
// let my = [1, false, true]

let inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

// myLeads = JSON.parse(myLeads)
// myLeads.push("bane.com")
// myLeads = JSON.stringify(myLeads)

// console.log(myLeads)

// localStorage.setItem("myLeads", "mica.rs")
// console.log(localStorage.getItem("myLeads"))



// myLeads = JSON.parse(myLeads)
// myLeads.push("mica.rs")

// console.log(myLeads)


// my = JSON.stringify(my)
// console.log(my)


// localStorage.setItem("bane", "bane.com")
// console.log(localStorage.getItem("bane"))

// let names = []

// names[0] = 'Aca'
// names[1] = 1
// console.log(names)

// localStorage.setItem("names", JSON.stringify(names))

// let back = JSON.parse(localStorage.getItem('names'))
// console.log(back)


inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderLeads()

})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // ulel.innerHTML += "<li>" + myLeads[i] + "</li>"
        // listItems += "<li>" + myLeads[i] + "</li>"
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
                <li>
                    <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
                </li>
        `
    }

    ulEl.innerHTML = listItems

}




// let kredit = 0 ,

// if(null) {
//     console.log('Hajde da igramo igricu')
// } else {
//     console.log('Ne mozes da igras igricu')
// }


// let pregledi = null
// pregledi = ["aca", "maca", 5]
// pregledi = []
// pregledi = ""


// if(pregledi) {
//     console.log('Proslo je')
// }else {
//     console.log('Nije proslo')
// }

// console.log(typeof pregledi)


// let x = Number("aca")
// console.log(x)

// let y = Boolean("")
// console.log(y)





// let conteinerEl = document.getElementById('container')

// conteinerEl.innerHTML = "<button onclick='kupi()'>Klikni</button>"

// function kupi() {
//     conteinerEl.innerHTML += "<p>Hvala Vam na kupovini!</p>"
// }


let voce = ['jabuka', 'banana', 'kruska', 'sljiva']

let a = Math.floor(Math.random() * voce.length) 

console.log(voce[a])