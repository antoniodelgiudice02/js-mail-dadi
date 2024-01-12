const login = document.getElementById('login')
const inputMail = document.getElementById('input-mail')
const text = document.getElementById('text')

//lista di mail di chi può accedere
const validMail = ['jasonsstatham@gmail.com', 'actionbronson@gmail.com', 'franklucas@gmail.com', 'peterpumpkineter@gmail.com', 'briangriffin@gmail.com',]
console.log(validMail)
//controllare che la mail esista nella lista di chi può accedere

const mail = inputMail.value

login.addEventListener('click', function(){

    console.log(mail)

    //SE la lista possiede la mail dell'utente stampare "Benvenuto"
    //ALTRIMENTI stampare "Rifiutato".

    if(mail == validMail[0]){
        text.innerHTML=('<span> Benvenuto! </span>')
    } else {
        text.innerHTML=('<span class="text-danger"> Rifiutato! </span>')
    }

})