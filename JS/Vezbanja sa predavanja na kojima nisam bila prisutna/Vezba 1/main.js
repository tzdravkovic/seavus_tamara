let array = []
let array1 = []
let array2 = []

for(let i = 0; i <= 1000; i++) {
    if(i % 3 === 0) {
        array.push(i)
    }

    if(i % 4 === 0 && i % 2 === 0) {
        array1.push(i)
    }

    if(i % 10 === 1) {
        array2.push(i)
    }
}


console.log(array)
console.log(array1)
console.log(array2)


///////////////////////////////////////////


let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];


function strings() {
    for(let i = 0; i < test.length; i++) {
        test[i] === typeof('string')
    }
}


console.log(strings())



