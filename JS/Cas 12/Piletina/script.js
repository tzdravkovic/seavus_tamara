// 5kg -> 10 piletine

// 1 pile = 0.5 kg => 2 pileta = 1 kg

var kilaza = prompt('Unesi kilazu')

var brojPileta = 2 * kilaza;

var p = document.getElementById('result')
p.innerHTML = 
'Uneli ste ' + kilaza + ' kilograma i dobili ste ' + brojPileta + ' pilica'