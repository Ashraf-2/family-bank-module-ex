// step-1: deposit button -> event handler
document.getElementById('depo-btn').addEventListener('click',function(){
    // console.log('deposit btn clicked')

    // step-2: get the deposit amount from the deposit field
    const depositField = document.getElementById('depo-field');
    const depositAmount = depositField.value;
    // console.log(depositAmount);

    //step-3: get the current deposit total amount
    const depositTotalElement = document.getElementById('deposit_total');
    const depositTotal = depositTotalElement.innerText;
    // console.log(depositTotal);
    depositTotalElement.innerText = depositTotal + depositAmount;
    console.log(depositTotal)



   
})