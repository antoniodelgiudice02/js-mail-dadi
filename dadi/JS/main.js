const start = document.getElementById('start')
const reset = document.getElementById('reset')
const userNumber = document.getElementById('user-number')
const computerNumber = document.getElementById('computer-number')

//al click di start:

start.addEventListener('click', function(){
    //Generare e stampare un numero da 1 a 6 per il computer e per il giocatore
    let numberUser = Math.floor((Math.random() * 6) + 1);
    console.log(numberUser)

    let numberComputer = Math.floor((Math.random() * 6) + 1);
    console.log(numberComputer)
      
})