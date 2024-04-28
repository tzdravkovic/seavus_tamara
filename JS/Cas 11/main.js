//Nasa prva interaktivna igra 

let playGame = confirm('Da li bi ste zeleli da igrate papir, kamen, makaze?')

if (playGame) {
    let playerChoise = prompt('Molim Vas unesite: kamen, makaze ili papir')

    if (playerChoise) {
        let player1 = playerChoise.trim().toLowerCase()

        if (player1 === 'kamen' || player1 === 'papir' || player1 === 'makaze' ) {

            let computerChoise = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoise === 1
            ? 'kamen'
            : computerChoise === 2
            ? 'papir'
            : 'makaze'
            
            let rezultat = 
            player1 === computer 
            ? 'Nereseno'
            : player1 === 'kamen' && computer === 'papir'
            ? `player1: ${player1}\nComputer: ${computer}
             Computer je pobedio`
            : player1 === 'papir' && computer === 'makaze'
            ? `player1: ${player1}\nComputer: ${computer} 
            Computer je pobedio`
            : player1 === 'makaze' && computer === 'kamen'
            ? `player1: ${player1}\nComputer: ${computer} 
            Computer je pobedio`
            : `player1: ${player1}\nComputer: ${computer}
            Player1 je pobedio`

            alert(rezultat)

            let playAgain = confirm ('Da li bi ste igrali ponovo?')
            playAgain ? location.reload() : alert('Hvala sto ste igrali')


        } else {
            alert('Niste uneli odgovarajuci podatak')
        }

    } else {
        alert('Verovatno si promenio misljenje, vidimo se sledeci put')
    }

} else {
    alert('Mozda sledeci put, dovidjenja!')
}