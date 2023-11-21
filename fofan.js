let button = document.querySelector(".buttons")
let cardNumber = document.querySelector(".card__number")


button.addEventListener("click", function() {
let newNumber = ""

for (let i = 0; i < 16; i++){
    let randomNumber = Math.floor(Math.random()*10)
    newNumber += randomNumber
if (i % 4 === 3 && i !== 15) {
    newNumber += ' ';
}
}
cardNumber.textContent = newNumber
});


let myNumber = document.querySelector(".card__sivi");
let buttonText = document.querySelector(".label__button");

buttonText.addEventListener("click", function() {
    let randomNumber = generateRandomNumbers()
    myNumber.innerText = randomNumber;
});

function generateRandomNumbers() {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
}
let yourName = document.querySelector(".name__surname")
let yourSurname = document.querySelector(".input__name-surname")

yourSurname.addEventListener("input", function(){
    let newName = yourSurname.value
    yourName.innerText = newName
})
yourName.innerText = yourSurname.value



let newData = document.querySelector(".card__year")
let newYear = document.querySelector(".input__card-year")


newYear.addEventListener("change", function(){
    let newCard = newYear.value
    let inputData = newCard.split("-")

    if(inputData.length === 3){
        let day = inputData[2]
        let mounth = inputData[1]
        let year = inputData[0]
        newData.innerHTML = mounth + '/' + year 
    }
})


let textAbout = document.querySelector(".text__about")
let checkModal = document.querySelector(".check__modal")

textAbout.addEventListener("click", function(){
    if(checkModal.className === "check__modal"){
        checkModal.classList.add("active")
    }
    else{
        checkModal.classList.remove("active")
    }
})

let buttonCheck = document.querySelector(".check__button")

buttonCheck.addEventListener("click", function(){
    if(checkModal.className === "check__modal"){
        checkModal.classList.add("active")
    }
    else{
        checkModal.classList.remove("active")
    }
})



let yarikModal = document.querySelector(".modalka__textic")
let newYarik = document.querySelector(".modalka__block")

yarikModal.addEventListener("click", function(){
    if(newYarik.className === "modalka__block"){
        newYarik.classList.add("active")
    }
    else(
        newYarik.classList.remove("active")
    )
})



