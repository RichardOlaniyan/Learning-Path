let activeQuestion = 1 
window.addEventListener("DOMContentLoaded", pageContent)
function pageContent () {
    let question = document.getElementById("question")
    let btnYes = document.getElementById("buttonYes")
    let btnNo = document.getElementById("buttonNo")

    btnYes.addEventListener("click", () => questionChange(activeQuestion, "yes" ))
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
     let nextQuestion = allQuestions.find(e => e.questionNumber == allQuestions.find(e => e.questionNumber == question).yesPath) 
     qElement.innerHTML = nextQuestion.question
     activeQuestion = nextQuestion.questionNumber
 } else {
     
 }
}