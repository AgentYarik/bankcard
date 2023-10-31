let myNumber = document.querySelector(".card__number")
let  textName = document.querySelector(".input__number-card")

textName.addEventListener("input", function(){
    let newText = textName.value
    myNumber.innerText = newText
})
myNumber.innerText = textName.value




let cardSivi = document.querySelector(".card__sivi")
let textSivi = document.querySelector(".input__card-sivi")

textSivi.addEventListener("input", function(){
    let newSivi = textSivi.value
    cardSivi.innerText = newSivi
})
cardSivi.innerText = textSivi.value


let cardCode = document.querySelector(".card__year")
let newCode = document.querySelector(".input__card-year")

newCode.addEventListener("input", function(){
    let cardNew = newCode.value 
    cardCode.innerText = cardNew 
})
cardCode.innerText = newCode.value


let yourName = document.querySelector(".name__surname")
let yourSurname = document.querySelector(".input__name-surname")

yourSurname.addEventListener("input", function(){
    let newName = yourSurname.value
    yourName.innerText = newName
})
yourName.innerText = yourSurname.value


let userName = "Yaroslav"
let subjectName = "Rubanik"
let create = " якщо я вкрав ваші гроші топто шахраї то пишіть сюди oliverqueen11133@gmail.com"
let year = "2010"

console.log(userName + subjectName +  create + year)



let message = alert("Увага нікому не надавайте свої дані карти ми не несемо відповідальність за вас якщо я ой топто шахраї вкрадуть гроші  то ми не винні!!!")
