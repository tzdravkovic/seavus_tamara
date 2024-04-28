function info() {
    let a = document.getElementById('info')
    let name = 'Tamara'
    let lName = 'Zdravkovic'
    let age = '23 godine'
    let info = name + " " + lName + ", " + age

    console.log(info)

    a.innerHTML = info
}