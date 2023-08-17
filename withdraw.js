document.getElementById('widr-btn').addEventListener('click', function () {
    const widrField = document.getElementById('widr-field');
    const widrAmount_string = widrField.value;
    const widrAmount = parseFloat(widrAmount_string);
    //clear the input field of widraw amount.
    widrField.value = '';
    // console.log(widrAmount);

    //adjust the total balance by calculating withdrawal amount.
    const balanceTotalElement = document.getElementById('balance_total');
    const balanceTotal_string = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotal_string);
    // balanceTotal = balanceTotal - widrAmount;
    // console.log(balanceTotal_string);
    if (widrAmount > balanceTotal) {
        alert('invalid amount');
    }
    else {
        const widrElement = document.getElementById('withdraw_total');
        const prevWidrAmount_string = widrElement.innerText;
        const prevWidrAmount = parseFloat(prevWidrAmount_string);
        // console.log(prevWidrAmount);

        const currentWidrAmount = prevWidrAmount + widrAmount;
        widrElement.innerText = currentWidrAmount;
        const currentBlalanceTotal = balanceTotal - widrAmount;
        balanceTotalElement.innerText = currentBlalanceTotal;
    }
   
    // console.log(widrAmount);


})