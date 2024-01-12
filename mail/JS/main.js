const login = document.getElementById('login')
const inputMail = document.getElementById('input-mail')

//lista di mail di chi può accedere
const validMail = ['jasonsstatham@gmail.com', 'actionbronson@gmail.com', 'franklucas@gmail.com', 'peterpumpkineter@gmail.com', 'briangriffin@gmail.com',]
console.log(validMail)
//controllare che la mail esista nella lista di chi può accedere

const mail = inputMail.value

login.addEventListener('click', function(){

    console.log(mail)


})