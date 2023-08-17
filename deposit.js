// step-1: deposit button -> event handler
document.getElementById('depo-btn').addEventListener('click',function(){
    // console.log('deposit btn clicked')

    // step-2: get the deposit amount from the deposit field
    const depositField = document.getElementById('depo-field');
    const newDepositAmount_string = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmount_string);
    // console.log(newDepositAmount);

    depositField.value = '';

    //parseFloat --->  convert string to float type.

    //step-3: get the current deposit total amount
    const depositTotalElement = document.getElementById('deposit_total');
    const prevDepositTotal_string = depositTotalElement.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotal_string);
    // console.log(depositTotal);
    // console.log(prevDepositTotal)

    //step-4: set the total amount of deposit value;
    const currentDepositTotal = prevDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    //step-5: adjust the total balance amount;
    const balanceTotalElement = document.getElementById('balance_total');
    const prevBalanceTotal_string = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotal_string);
    
    //step-6: calculate total balance
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // console.log("final",balanceTotalElement);



    







    //step-7: clear the deposit field
    depositField.value = '';


   
})