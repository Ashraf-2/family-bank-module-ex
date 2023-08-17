
// console.log('login in js file');
// step-1: add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // console.log('submit botton clicked');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value form the element
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    // console.log(email, pass);

    // step-4: verify email and password.
    if(email === 'haumaukau@gmail.com' && pass === 'secretBoss')
    {
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
    else
    {
        // console.log('invaild user');
        alert('invalid user');
    }

    // DANGER: do not varify email and password on client side.
})
