let activeQuestion = 1 
window.addEventListener("DOMContentLoaded", pageContent)
function pageContent () {
    let question = document.getElementById("question")
    let btnYes = document.getElementById("buttonYes")
    let btnNo = document.getElementById("buttonNo")
    let bodyWrap = document.getElementsByClassName("bodyWrap")[0]

    btnYes.addEventListener("click", () => questionChange(activeQuestion, "yes" ))
    gsap.to(".bodyWrap", {duration:1, y:0})
}

let allQuestions = [
    { 
        questionNumber: 1 , 
        question: "Are you above the age of 18?",
        yesPath: 2 ,
        noPath: 0 ,
    }, 
    {
        questionNumber: 2 , 
        question: "Do you love icecream?",
        yesPath: 3 ,
        noPath: 0 ,
    },
    {
        questionNumber: 3 , 
        question: "Do you enjoy hiking?",
        yesPath: 4 ,
        noPath: 0 , 
    }
]

function questionChange(question, option, qElement = document.getElementById("question")) {
 if (option = "yes") {
    gsap.to(".bodyWrap", {duration:1, y:500})
     let nextQuestion = allQuestions.find(e => e.questionNumber == allQuestions.find(e => e.questionNumber == question).yesPath) 
     qElement.innerHTML = nextQuestion.question
     activeQuestion = nextQuestion.questionNumber
     window.setTimeout (()=>{
        document.getElementsByClassName("bodyWrap")[0].style.transform = "translateY(-100%)"
         gsap.to(".bodyWrap", {duration:1, y:0})
        }, 1000)
     //window.setTimeout(()=> gsap.to(".bodyWrap", {duration:1, y:0}), 2000)
 } else {
     
 }
}

