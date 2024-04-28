let vreme = 12

let poruka = 
        (vreme >= 4 && vreme < 12)
        ? 'Dobro jutro'
        : (vreme >=12 && vreme < 17)
        ? 'Dobar dan'
        : (vreme >= 17 && vreme <20)
        ? 'Dobro vece'
        : 'Laku noc'          

console.log(poruka)



let igrac1 = 'kamen'
let igrac2 = 'makaze' 

let pobednik 

if(igrac1 === igrac2){
    
}

switch (igrac1 === igrac2)  {
    case (igrac1 === 'papir' && igrac2 === 'kamen'):
        pobednik = 'Igrac 1 je pobedio'
        break;
    case (igrac1 === 'kamen' && igrac2 === 'makaze'):
        pobednik = 'Igrac 1 je pobedio'
        break;
    case (igrac1 === 'makaze' && igrac2 === 'papir'):
        pobednik = 'Igrac 1 je pobedio'
        break;
    default:
        pobednik = 'Igrac 2 je pobedio'       
}

console.log(pobednik)


let vocka = 'jabuka'

switch(vocka){
    case 'jabuka':
        console.log('Jabuka')
        break;
    case 'kruska':
        console.log('Kruska')
        break;
    default:
        console.log('Ne znam vocku')
        break;
}




    