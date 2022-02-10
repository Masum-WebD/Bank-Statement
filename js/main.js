document.getElementById('input-button').addEventListener('click', function(){
    const emailField =document.getElementById('user-email');
    const userEmail = emailField.value
    const passwordField =document.getElementById('user-password')
    const userPassword = passwordField.value
    if(userEmail == 'sontan@Baper.com' && userPassword == 'masum'){
            window.location.href ='bank.html'
    }
})
