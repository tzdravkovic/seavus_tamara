//food dog

function dog(a, b) {
    return years = (a - b) * 7
}
console.log(dog(2024, 2020))


//typeof

function type(d) {
    return typeof d
}

console.log(type(5))
console.log(type('Edi'))
console.log(type(true))
console.log(type())


//tellStory

function tellStory(array) {
    return 'Ja se zovem ' + array[0] + ' i ' + array[1] + ' se osecam za sto ' + array[2]
}

var story = tellStory(['Tamara', 'odlicno', 'treniram'])
console.log(story)



// ATM
var account = 30000;

function atm(amount) {
    if(amount <= account) {
        account = account - amount
        console.log('Uspesno ste izvrsili transakciju. Trenutno stanje na racunu je ' + account)
    } else { 
        console.log('Nemate dovoljno sredstava na racunu. Trenutno stanje na racunu je ' + account)
    }
}

console.log(atm(10000))


//array

function array(num) {
    return num[0] + num[1] + num[2] + num[3] + num[4] 
}

console.log(array([2, 4, 6, 8, 10]))