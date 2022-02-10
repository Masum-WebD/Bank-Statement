 document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput =document.getElementById('deposite-input')
    const depositeValue = depositeInput.value
    console.log(depositeValue)
    const depositeAmount = document.getElementById('deposite-amount')
    depositeAmount.innerText= depositeValue
    depositeInput.value =' '
})