const start = document.getElementById('start')
const reset = document.getElementById('reset')
const userNumber = document.getElementById('user-number')
const computerNumber = document.getElementById('computer-number')
const text = document.getElementById('text')

//al click di start:

start.addEventListener('click', function(){
    //Generare e stampare un numero da 1 a 6 per il computer e per il giocatore
    let numberUser = Math.floor((Math.random() * 6) + 1);
    console.log(numberUser)

    userNumber.innerText = numberUser

    let numberComputer = Math.floor((Math.random() * 6) + 1);
    console.log(numberComputer)

    computerNumber.innerText = numberComputer

    if (numberUser > numberComputer){
      text.innerHTML=(`<h1 style="color: rgb(130, 205, 68)">HAI VINTO</h1>`)
    } else{
      text.innerHTML=(`<h1 style="color: red">HAI PERSO</h1>`)
    }

      
})