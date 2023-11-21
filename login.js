let email = document.querySelector(".email")
email.addEventListener("input", function(){
    let newEmail = email.value

    if(newEmail.length > 5){
        email.classList.add("night")
        email.classList.remove("summer")
    }
    else if(newEmail.length === 0){
        email.classList.remove("summer")
        email.classList.remove("night")
    }
    else{
        email.classList.remove("night")
        email.classList.add("summer")
    }
})

let password = document.querySelector(".password")
password.addEventListener("input", function () {
    let newPassword = password.value;

    if (newPassword.length > 4) {
        password.classList.add("greenn");
        password.classList.remove("redd");
    } else if (newPassword.length === 0) {
        password.classList.remove("greenn");
        password.classList.remove("redd");
    } else {
        password.classList.remove("greenn");
        password.classList.add("redd");
    }
});

