const start = document.getElementById('start')
const reset = document.getElementById('reset')
const userNumber = document.getElementById('user-number')
const computerNumber = document.getElementById('computer-number')

//al click di start:

start.addEventListener('click', function(){
    //Generare e stampare un numero da 1 a 6 per il computer e per il giocatore
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min + 1) + min); 
        console.log(Math.random)
      }
      
})