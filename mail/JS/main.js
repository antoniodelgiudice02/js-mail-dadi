const login = document.getElementById('login');
const reset = document.getElementById('reset');
const inputMail = document.getElementById('input-mail');
const text = document.getElementById('text');

//lista di mail di chi può accedere
const validMail = ['jasonsstatham@gmail.com', 'actionbronson@gmail.com', 'franklucas@gmail.com', 'peterpumpkineter@gmail.com', 'briangriffin@gmail.com',];


//controllare che la mail esista nella lista di chi può accedere
login.addEventListener('click', function () {

    

    //SE la lista possiede la mail dell'utente stampare "Benvenuto"
    //ALTRIMENTI stampare "Rifiutato".
    const mail = inputMail.value;
    console.log(mail)


    for (let i = 0; i < validMail.length; i++) {


        if (mail == validMail[i]) {

            text.innerHTML = ('<span> Benvenuto! </span>');
            break;

        } else {

            text.innerHTML = ('<span class="text-danger"> Rifiutato! </span>');

        }
    }

})
