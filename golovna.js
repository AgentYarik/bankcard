let userName = sessionStorage.getItem("userName")
document.getElementById("user__placeholder").innerHTML = userName


window.addEventListener("scroll", function(){
    let myAnimation = document.querySelector(".div__bank")
    if(scrollY > 1300){
        myAnimation.classList.add("new")
    }
    else{
        myAnimation.classList.remove("new")
    }
})