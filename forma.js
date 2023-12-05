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
        let checkModal = document.querySelector(".check")
        checkModal.classList.add("razer")
        setTimeout(function(){
            checkModal.classList.remove("razer")
        }, 2000) 
        return;
    }
    else if(userPassword.length < 7){
        let modalkaCheck = document.querySelector(".modalka")
        modalkaCheck.classList.add("blody")
        setTimeout(function(){
            modalkaCheck.classList.remove("blody")
        },2000)
        return;
    }
    else if(userPhone.length !== 13 || !userPhone.includes("+") ){
        let pinKod = document.querySelector(".pinkod")
        pinKod.classList.add("pasword")
        setTimeout(function(){
            pinKod.classList.remove("pasword")
        },2000)
        return;
    }
    else if (!userGmail.includes("@") ){
        let emailNep = document.querySelector(".emailik")
        emailNep.classList.add("emalike")
        setTimeout(function(){
            emailNep.classList.remove("emalike")
        },2000)
        return;
    }

    else{
        sessionStorage.setItem("userName", userName)
        window.location.href = "./golovna.html"
    }
    
})





















/* else{
    let userNameDisplay = document.getElementById("userNameDisplay");
    userNameDisplay.textContent = "Ваше ім'я: " + userName;

    window.location.href = "./golovna.html";
}

 */