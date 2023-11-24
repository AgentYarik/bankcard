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

















let button = document.querySelector(".button")

button.addEventListener("click", function(){
    let blockInfo = document.querySelector(".block__info")
    let blockIfor = document.querySelector(".block__ifor")
    let blockInto = document.querySelector(".block__into")
    let blockInpo = document.querySelector(".block__inpo")

    let userName = blockInfo.value
    let userPhone = blockIfor.value
    let userGmail = blockInto.value
    let userPassword = blockInpo.value


    if(userName.length === 0){
        alert("Введіть своє імя")
        return;
    }
    else if(userPassword.length < 7){
        alert("Пароль має бути не менше 7 символів")
        return;
    }
    else if(userPhone.length !== 13 || !userPhone.includes("+") ){
        alert("Номер повинен мати 13 символів і плюсічок")
        return;
    }
    else if (!userGmail.includes("@") ){
        alert("Невірний формат електронної пошти")
        return;
    }
    else{
        window.location.href = "./golovna.html"
    }
})
