let password = document.querySelector(".block__inpo");
password.addEventListener('input', function () {
    let passwordValue = password.value;
    if(passwordValue.length > 6) {
        password.classList.add('green')
        password.classList.remove('red')
    }
    else if(passwordValue.length === 0){
        password.classList.remove('green')
        password.classList.remove('red')
    }

    else{
        password.classList.remove('green')
        password.classList.add('red')
    }
})