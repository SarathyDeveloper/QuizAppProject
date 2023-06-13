const quizData = [
    {
        question:"Web page editors works on a principle.",
        a:"WWW",
        b:"HTML",
        c:"WYSIWYG",
        d:"WYGWYSI",
        correct:"c",
    },
    {
        question:"Which program is used by web clients to view the web pages?",
        a:"Web browser",
        b:"Protocol",
        c:"Web server",
        d:"Search Engine",
        correct:"a",
    },
    {
        question:"What is the name of the location address of the hypertext documents?",
        a:"Uniform Resource Locator",
        b:"Web server",
        c:"File",
        d:"Web address",
        correct:"a",
    },
    {
        question:"What are shared on the Internet and are called as Web pages?",
        a:"Programs",
        b:"Cables",
        c:"Hypertext documents",
        d:"None",
        correct:"c",
    }
];

const quiz = document.getElementById("quiz");
const ans = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text =  document.getElementById("a_text");
const b_text =  document.getElementById("b_text");
const c_text =  document.getElementById("c_text");
const d_text =  document.getElementById("d_text");
const submitBtn =  document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    ans.forEach(answerEl => answerEl.checked = false)
}

function getselected(){
    let answer
    ans.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click' , () =>{
    const answer = getselected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2 class="aa"> You Answer ${score}/ ${quizData.length} Questions Correctly </h2>

            <button onclick="location.reload()">Reload </button>
            `
        }
    }

})