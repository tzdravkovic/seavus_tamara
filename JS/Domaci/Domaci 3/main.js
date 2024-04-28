function igrica() {
    let igrac1 = prompt('Igra igrac 1')
    let igrac2 = prompt('Igra igrac 2')

    if (igrac1 === 'kamen') {
        if (igrac2 === 'papir') {
            alert('Pobednik je igrac 2' )
        } else if (igrac2 === 'makaze') {
            alert('Pobednik je igrac 1')
        } else {
            alert('Nereseno')
        }
    } else if (igrac1 === 'makaze') {
        if (igrac2 === 'kamen') {
            alert('Pobednik je igrac 2')
        } else if (igrac2 === 'papir') {
            alert('Pobednik je igrac 1')
        } else {
            alert ('Nereseno')
        }

    } else {
        if (igrac2 === 'kamen') {
            alert('Pobednik je igrac 1')
        } else if (igrac2 === 'makaze') {
            alert('Pobednik je igrac 2')
        } else {
            alert('Nereseno')
        }

    }
alert('Igra je zavrsena')

}