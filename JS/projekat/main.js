let myLeads = []



let inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
    // console.log(myLeads)
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
























// let conteinerEl = document.getElementById('container')

// conteinerEl.innerHTML = "<button onclick='kupi()'>Klikni</button>"

// function kupi() {
//     conteinerEl.innerHTML += "<p>Hvala Vam na kupovini!</p>"
// }

