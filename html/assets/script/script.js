let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtName= document.querySelector('#txtName')
    if(nome.value.length < 3){
        txtName.innerHTML = 'Nome inválido'
        txtName.style.color = 'red'
    }else{
        txtName.innerHTML = 'Nome válido'
        txtName.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail= document.querySelector('#email')
    
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Nome válido'
        txtEmail.style.color = 'green'
    }
}